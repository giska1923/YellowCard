import {
  calc,
  getAllLeagues,
  filterSeasonsByLeagueId,
  getParticipants,
} from './goals.js';

// Function to handle the average goals calculation
function calcAverage() {
  console.log('calcAverage - Button clicked');

  const resultElement = document.getElementById('result');
  const leagueId = document.getElementById('league').value;
  const seasonId = document.getElementById('season').value;
  const teamId = document.getElementById('team').value;

  const exactNumGoals =
    document.getElementById('exactNumGoals').value === ''
      ? -1
      : Number(document.getElementById('exactNumGoals').value);

  let result;

  console.log('leagueId, seasonId, teamId: ', leagueId, seasonId, teamId);
  if (leagueId && seasonId && teamId) {
    result = calc(
      Number(leagueId),
      Number(seasonId),
      Number(teamId),
      exactNumGoals
    );
  } else {
    result = calc();
  }

  if (result) {
    document.getElementById(
      'calc'
    ).innerText = `Matches count: ${result.count} \n
        Goals count: ${result.totalGoals} <> Average: ${result.averageGoals} \n
        Goals scored count: ${result.totalGoalsScored} <> Average: ${result.averageGoalsScored} \n
        Goals scored count home: ${result.totalGoalsScoredHome} <> Average: ${result.averageGoalsScoredHome} \n
        Goals scored count home 1st half: ${result.firstHalfGoalsScoredHome} <> Average: ${result.averageFirstHalfGoalsScoredHome} \n
        Goals scored count home 2nd half: ${result.secondHalfGoalsScoredHome} <> Average: ${result.averageSecondHalfGoalsScoredHome} \n
        Goals scored count away: ${result.totalGoalsScoredAway} <> Average: ${result.averageGoalsScoredAway} \n
        Goals scored count away 1st half: ${result.firstHalfGoalsScoredAway} <> Average: ${result.averageFirstHalfGoalsScoredAway} \n
        Goals scored count away 2nd half: ${result.secondHalfGoalsScoredAway} <> Average: ${result.averageSecondHalfGoalsScoredAway} \n
        Goals conceded count: ${result.totalGoalsConceded} <> Average: ${result.averageGoalsConceded} \n
        Goals conceded count home: ${result.totalGoalsConcededHome} <> Average: ${result.averageGoalsConcededHome} \n
        Goals conceded count home 1st half: ${result.firstHalfGoalsConcededHome} <> Average: ${result.averageFirstHalfGoalsConcededHome} \n
        Goals conceded count home 2nd half: ${result.secondHalfGoalsConcededHome} <> Average: ${result.averageSecondHalfGoalsConcededHome} \n
        Goals conceded count away: ${result.totalGoalsConcededAway} <> Average: ${result.averageGoalsConcededAway} \n
        Goals conceded count away 1st half: ${result.firstHalfGoalsConcededAway} <> Average: ${result.averageFirstHalfGoalsConcededAway} \n
        Goals conceded count away 2nd half: ${result.secondHalfGoalsConcededAway} <> Average: ${result.averageSecondHalfGoalsConcededAway} \n
        Corners count: ${result.totalCorners} <> Average: ${result.averageCorners} \n
        Yellow cards count: ${result.totalYellowCards} <> Average: ${result.averageYellowCards} \n
        Red cards count: ${result.totalRedCards} <> Average: ${result.averageRedCards} \n
        Win ratio: ${result.averageWinRatio}% \n
        Lose ratio: ${result.averageLoseRatio}% \n
        Draw ratio: ${result.averageDrawRatio}% \n
        Percent of matches with scored entered goals: ${result.averageExactNumGoals}%`;
    resultElement.classList.remove('inactive');
  } else {
    resultElement.classList.add('inactive');
  }
}

// Attach event listener to the button
document.getElementById('calcGoalsBtn').addEventListener('click', calcAverage);

// JavaScript to handle tab switching
document.querySelectorAll('.sidebar a').forEach(tab => {
  tab.addEventListener('click', function () {
    document
      .querySelectorAll('.sidebar a')
      .forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const seasonSelect = document.getElementById('season');
  const leagueSelect = document.getElementById('league');
  const teamSelect = document.getElementById('team');

  const defaultLeagueId = 271;

  function populateSelectBox(selectElement, items, valueKey, textKey) {
    selectElement.innerHTML = ''; // Clear existing options
    items.forEach(item => {
      const option = document.createElement('option');
      option.value = item[valueKey];
      option.text = item[textKey];
      selectElement.appendChild(option);
    });
  }

  function populateSeasonSelect(seasons) {
    populateSelectBox(seasonSelect, seasons, 'id', 'name');
    if (seasons.length > 0) {
      seasonSelect.value = seasons[0].id;
      populateTeamSelect(defaultLeagueId, seasons[0].id);
    }
  }

  function populateTeamSelect(leagueId, seasonId) {
    const uniqueParticipants = getParticipants(leagueId, seasonId);
    populateSelectBox(teamSelect, uniqueParticipants, 'id', 'name');
    if (uniqueParticipants.length > 0) {
      teamSelect.value = uniqueParticipants[0].id;
    }
  }

  function init() {
    try {
      const allLeagues = getAllLeagues();
      populateSelectBox(leagueSelect, allLeagues, 'id', 'name');
      leagueSelect.value = defaultLeagueId;

      const initialSeasons = filterSeasonsByLeagueId(defaultLeagueId);
      populateSeasonSelect(initialSeasons);

      leagueSelect.addEventListener('change', () => {
        const selectedLeagueId = leagueSelect.value;
        const filteredSeasons = filterSeasonsByLeagueId(selectedLeagueId);
        populateSeasonSelect(filteredSeasons);
        populateTeamSelect(selectedLeagueId, filteredSeasons[0].id);
      });

      seasonSelect.addEventListener('change', () => {
        const selectedSeasonId = seasonSelect.value;
        const selectedLeagueId = leagueSelect.value;
        populateTeamSelect(selectedLeagueId, selectedSeasonId);
      });
    } catch (error) {
      console.error('Error initializing page:', error);
    }
  }

  init();
});
