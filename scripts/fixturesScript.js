import {
  calc,
  getLeagueIdByName,
  getSeasonIdByNameAndLeague,
  getTeamIdByName,
} from './fixtures.js';

// Function to handle the average goals calculation
function calcAverage() {
  console.log('calcAverage - Button clicked');

  const resultElement = document.getElementById('result');
  const leagueName = document.getElementById('league').value;
  const seasonName = document.getElementById('season').value;
  const teamName = document.getElementById('team').value;

  const leagueId = getLeagueIdByName(leagueName);
  const seasonId = getSeasonIdByNameAndLeague(seasonName, leagueId);
  const teamId = getTeamIdByName(teamName);

  const duration = document.getElementsByName('duration');
  let matchDuration = 0;
  for (let i = 0; i < duration.length; i++) {
    if (duration[i].checked) matchDuration = duration[i].value;
  }

  const goalsConceded = document.getElementById('conceded').checked;

  const exactNumGoals =
    document.getElementById('exactNumGoals').value === ''
      ? -1
      : Number(document.getElementById('exactNumGoals').value);

  let result;

  if (leagueId && seasonId && teamId) {
    result = calc(
      Number(leagueId),
      Number(seasonId),
      Number(teamId),
      Number(matchDuration),
      goalsConceded,
      exactNumGoals
    );
  } else {
    result = calc();
  }

  if (result) {
    document.getElementById(
      'calc'
    ).innerText = `Matches count: ${result.count} \n
                   Goals count: ${result.totalGoals} <> Average number of goals: ${result.averageGoals} \n
                   Corners count: ${result.totalCorners} <> Average number of corners: ${result.averageCorners} \n
                   Yellow cards count: ${result.totalYellowCards} <> Average number of yellow cards: ${result.averageYellowCards} \n
                   Red cards count: ${result.totalRedCards} <> Average number of red cards: ${result.averageRedCards} \n
                   Win ratio: ${result.averageWinRatio} \n
                   Lose ratio: ${result.averageLoseRatio} \n
                   Draw ratio: ${result.averageDrawRatio} \n
                   Average number of matches with scored goals: ${result.averageExactNumGoals}`;
    resultElement.classList.remove('inactive');
  } else {
    resultElement.classList.add('inactive');
  }
}

// Attach event listener to the button
document
  .getElementById('calcFixturesBtn')
  .addEventListener('click', calcAverage);

// JavaScript to handle tab switching
document.querySelectorAll('.sidebar a').forEach(tab => {
  tab.addEventListener('click', function () {
    document
      .querySelectorAll('.sidebar a')
      .forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});
