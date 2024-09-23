import xlsx from 'xlsx';
import allTeamsSeasonsPrc from './allTeamsSeasonsPrc.js';

// List of seasons we want to loop through
const seasons = [
  '2018/2019',
  '2019/2020',
  '2020/2021',
  '2021/2022',
  '2022/2023',
  '2023/2024',
];

// Create a new workbook
const wb = xlsx.utils.book_new();

// Helper function to add a table with a title
const addTableWithTitle = (ws, title, data, fieldName, startRow) => {
  // Add the title
  xlsx.utils.sheet_add_aoa(ws, [[title]], { origin: `A${startRow}` });

  // Add the table headers (League, Team, 0.5, 1.5, 2.5, etc.)
  const headers = ['League', 'Team'];
  data[0].prcByCriteria.forEach(criteria => {
    headers.push(criteria.criteria); // Adding criteria as headers (0.5, 1.5, etc.)
  });
  xlsx.utils.sheet_add_aoa(ws, [headers], { origin: `A${startRow + 1}` });

  // To prevent duplication of teams, we'll use a Set to track unique teams
  const uniqueTeams = new Set();

  // Add the table data (Teams as rows)
  let currentRow = startRow + 2; // Start after title and headers
  data.forEach(teamData => {
    if (!uniqueTeams.has(teamData.teamName)) {
      uniqueTeams.add(teamData.teamName); // Ensure the team is added only once

      const row = [teamData.leagueId, teamData.teamName]; // Add League and Team as the first two columns
      teamData.prcByCriteria.forEach(criteria => {
        row.push(criteria[fieldName]); // Add the relevant field (e.g., prcGoals, prcScored, etc.)
      });
      xlsx.utils.sheet_add_aoa(ws, [row], { origin: `A${currentRow}` });
      currentRow += 1; // Move to next row for the next team
    }
  });

  // Return the next available row after the table
  return currentRow + 1; // 1 row gap between tables
};

// Loop through each season
seasons.forEach(season => {
  // Filter dataArray to get only the data for the current season
  const seasonDataArray = allTeamsSeasonsPrc.filter(
    item => item.seasonName === season
  );

  if (seasonDataArray.length > 0) {
    // Create a new worksheet
    const ws = xlsx.utils.aoa_to_sheet([[]]); // Start with an empty sheet

    // Define the start row
    let currentRow = 1;

    // Add each table with a title
    currentRow = addTableWithTitle(
      ws,
      'Goals',
      seasonDataArray,
      'prcGoals',
      currentRow
    );
    currentRow = addTableWithTitle(
      ws,
      'Scored',
      seasonDataArray,
      'prcScored',
      currentRow
    );
    currentRow = addTableWithTitle(
      ws,
      'Conceded',
      seasonDataArray,
      'prcConceded',
      currentRow
    );
    currentRow = addTableWithTitle(
      ws,
      '1H',
      seasonDataArray,
      'prc1H',
      currentRow
    );
    currentRow = addTableWithTitle(
      ws,
      '2H',
      seasonDataArray,
      'prc2H',
      currentRow
    );
    currentRow = addTableWithTitle(
      ws,
      'Home',
      seasonDataArray,
      'prcHome',
      currentRow
    );
    currentRow = addTableWithTitle(
      ws,
      'Away',
      seasonDataArray,
      'prcAway',
      currentRow
    );

    // Append the worksheet to the workbook, naming it with the season
    const validSheetName = season.replace(/\//g, '-');
    xlsx.utils.book_append_sheet(wb, ws, validSheetName);
  }
});

// Write the Excel file
const filePath = './criteria_by_season.xlsx';
xlsx.writeFile(wb, filePath);

console.log(
  `Excel file with separate sheets and tables by season created successfully at ${filePath}`
);
