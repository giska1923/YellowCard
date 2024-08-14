import { calc } from './fixtures.js';

// Function to handle the average goals calculation
function calcAverage() {
  console.log('calcAverage - Button clicked');

  const resultElement = document.getElementById('result');
  const leagueId = document.getElementById('league').value;
  const seasonId = document.getElementById('season').value;
  const teamId = document.getElementById('team').value;

  const duration = document.getElementsByName('duration');
  let matchDuration = 0;
  for (let i = 0; i < duration.length; i++) {
    if (duration[i].checked) matchDuration = duration[i].value;
  }

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
                   Goals scored count away: ${result.totalGoalsScoredAway} <> Average: ${result.averageGoalsScoredAway} \n
                   Goals conceded count: ${result.totalGoalsConceded} <> Average: ${result.averageGoalsConceded} \n
                   Goals conceded count home: ${result.totalGoalsConcededHome} <> Average: ${result.averageGoalsConcededHome} \n
                   Goals conceded count away: ${result.totalGoalsConcededAway} <> Average: ${result.averageGoalsConcededAway} \n
                   Corners count: ${result.totalCorners} <> Average: ${result.averageCorners} \n
                   Yellow cards count: ${result.totalYellowCards} <> Average: ${result.averageYellowCards} \n
                   Red cards count: ${result.totalRedCards} <> Average: ${result.averageRedCards} \n
                   Win ratio: ${result.averageWinRatio}% \n
                   Lose ratio: ${result.averageLoseRatio}% \n
                   Draw ratio: ${result.averageDrawRatio}% \n
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
