import xlsx from 'xlsx';
import dataArray from './allTeamsSeasons.js';

////////// Mapping //////////
const mapSeasonStats = item => ({
  League: item.leagueId,
  Season: item.seasonName,
  Team: item.teamName,
  'Matches played': item.count,
  Wins: item.totalWins,
  Draws: item.totalDraws,
  Losses: item.totalLosts,
  Points: item.points,
  'Goals scored': item.totalGoalsScored,
  'Goals conceded': item.totalGoalsConceded,
  'Goal difference': item.goalDifference,
  'Average goals': item.averageGoals,
  'Average scored': item.averageGoalsScored,
  'Average conceded': item.averageGoalsConceded,
});

const mapFirstHalfStats = item => ({
  League: item.leagueId,
  Season: item.seasonName,
  Team: item.teamName,
  'Matches played': item.count,
  Wins: item.firstHalfWins,
  Draws: item.firstHalfDraws,
  Losses: item.firstHalfLosts,
  Points: item.points1H,
  'Goals scored': item.firstHalfGoalsScoredHome + item.firstHalfGoalsScoredAway,
  'Goals conceded':
    item.firstHalfGoalsConcededHome + item.firstHalfGoalsConcededAway,
  'Goal difference': item.firstHalfGoalDifference,
  'Average goals': item.averageFirstHalfGoals,
  'Average scored': item.averageFirstHalfGoalsScored,
  'Average conceded': item.averageFirstHalfGoalsConceded,
});

const mapSecondHalfStats = item => ({
  League: item.leagueId,
  Season: item.seasonName,
  Team: item.teamName,
  'Matches played': item.count,
  Wins: item.secondHalfWins,
  Draws: item.secondHalfDraws,
  Losses: item.secondHalfLosts,
  Points: item.points2H,
  'Goals scored':
    item.secondHalfGoalsScoredHome + item.secondHalfGoalsScoredAway,
  'Goals conceded':
    item.secondHalfGoalsConcededHome + item.secondHalfGoalsConcededAway,
  'Goal difference': item.secondHalfGoalDifference,
  'Average goals': item.averageSecondHalfGoals,
  'Average scored': item.averageSecondHalfGoalsScored,
  'Average conceded': item.averageSecondHalfGoalsConceded,
});

const mapHomeStats = item => ({
  League: item.leagueId,
  Season: item.seasonName,
  Team: item.teamName,
  'Matches played': item.countHome,
  Wins: item.homeWins,
  Draws: item.homeDraws,
  Losses: item.homeLosts,
  Points: item.pointsHome,
  'Goals scored': item.totalGoalsScoredHome,
  'Goals conceded': item.totalGoalsConcededHome,
  'Goal difference': item.homeGoalDifference,
  'Average goals': item.averageGoalsHome,
  'Average scored': item.averageGoalsScoredHome,
  'Average conceded': item.averageGoalsConcededHome,
});

const mapAwayStats = item => ({
  League: item.leagueId,
  Season: item.seasonName,
  Team: item.teamName,
  'Matches played': item.countAway,
  Wins: item.awayWins,
  Draws: item.awayDraws,
  Losses: item.awayLosts,
  Points: item.pointsAway,
  'Goals scored': item.totalGoalsScoredAway,
  'Goals conceded': item.totalGoalsConcededAway,
  'Goal difference': item.awayGoalDifference,
  'Average goals': item.averageGoalsAway,
  'Average scored': item.averageGoalsScoredAway,
  'Average conceded': item.averageGoalsConcededAway,
});

////////// Logic //////////

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

// Loop through each season
seasons.forEach(season => {
  // Filter dataArray to get only the data for the current season
  const seasonData = dataArray.filter(item => item.seasonName === season);

  if (seasonData.length > 0) {
    // Create a new worksheet
    const ws = xlsx.utils.aoa_to_sheet([[]]); // Start with an empty sheet

    // Titles for each table
    const titles = [
      'Season Stats',
      '1H Season Stats',
      '2H Season Stats',
      'Home Stats',
      'Away Stats',
    ];

    // Initialize arrays for each section
    const seasonStats = [];
    const firstHalfStats = [];
    const secondHalfStats = [];
    const homeStats = [];
    const awayStats = [];

    // Iterate over seasonData and populate each stats array
    seasonData.forEach(team => {
      // Add unique teams to each stats section
      if (!seasonStats.some(row => row.Team === team.teamName)) {
        seasonStats.push(mapSeasonStats(team));
      }
      if (!firstHalfStats.some(row => row.Team === team.teamName)) {
        firstHalfStats.push(mapFirstHalfStats(team));
      }
      if (!secondHalfStats.some(row => row.Team === team.teamName)) {
        secondHalfStats.push(mapSecondHalfStats(team));
      }
      if (!homeStats.some(row => row.Team === team.teamName)) {
        homeStats.push(mapHomeStats(team));
      }
      if (!awayStats.some(row => row.Team === team.teamName)) {
        awayStats.push(mapAwayStats(team));
      }
    });

    // Add title for Season Stats (Table 1) at row 1, column A
    xlsx.utils.sheet_add_aoa(ws, [[titles[0]]], { origin: 'A1' });

    // Add season stats starting at row 2, column A
    xlsx.utils.sheet_add_json(ws, seasonStats, { origin: 'A2' });

    // Add title for 1H Season Stats at the next empty column (after Season Stats), with a gap of one column
    const firstHalfStartColumn = seasonStats[0]
      ? Object.keys(seasonStats[0]).length + 2
      : 2;
    xlsx.utils.sheet_add_aoa(ws, [[titles[1]]], {
      origin: `${xlsx.utils.encode_col(firstHalfStartColumn)}1`,
    });

    // Add 1H Season Stats starting at row 2 in the appropriate column
    xlsx.utils.sheet_add_json(ws, firstHalfStats, {
      origin: `${xlsx.utils.encode_col(firstHalfStartColumn)}2`,
    });

    // Add title for 2H Season Stats with one column gap after 1H Season Stats
    const secondHalfStartColumn =
      firstHalfStartColumn + Object.keys(firstHalfStats[0]).length + 1;
    xlsx.utils.sheet_add_aoa(ws, [[titles[2]]], {
      origin: `${xlsx.utils.encode_col(secondHalfStartColumn)}1`,
    });

    // Add 2H Season Stats starting at row 2
    xlsx.utils.sheet_add_json(ws, secondHalfStats, {
      origin: `${xlsx.utils.encode_col(secondHalfStartColumn)}2`,
    });

    // Add title for Home Stats with one column gap after 2H Season Stats
    const homeStartColumn =
      secondHalfStartColumn + Object.keys(secondHalfStats[0]).length + 1;
    xlsx.utils.sheet_add_aoa(ws, [[titles[3]]], {
      origin: `${xlsx.utils.encode_col(homeStartColumn)}1`,
    });

    // Add Home Stats starting at row 2
    xlsx.utils.sheet_add_json(ws, homeStats, {
      origin: `${xlsx.utils.encode_col(homeStartColumn)}2`,
    });

    // Add title for Away Stats with one column gap after Home Stats
    const awayStartColumn =
      homeStartColumn + Object.keys(homeStats[0]).length + 1;
    xlsx.utils.sheet_add_aoa(ws, [[titles[4]]], {
      origin: `${xlsx.utils.encode_col(awayStartColumn)}1`,
    });

    // Add Away Stats starting at row 2
    xlsx.utils.sheet_add_json(ws, awayStats, {
      origin: `${xlsx.utils.encode_col(awayStartColumn)}2`,
    });

    // Append the worksheet to the workbook, naming it with the season (e.g., '2018-2019')
    xlsx.utils.book_append_sheet(wb, ws, season.replace('/', '-'));
  }
});

// Write the Excel file
const filePath = './stats_by_season.xlsx';
xlsx.writeFile(wb, filePath);

console.log(`Excel file with 6 sheets created successfully at ${filePath}`);
