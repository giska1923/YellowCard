import averageGoals from './goals.js';

// Function to handle the average goals calculation
function calcAverage() {
  console.log('calcAverage - Button clicked');

  let avgGoals = 0;

  const resultElement = document.getElementById('result');
  const leagueId = document.getElementById('league').value;
  const seasonId = document.getElementById('season').value;
  const teamId = document.getElementById('team').value;

  if (leagueId && seasonId && teamId) {
    avgGoals = averageGoals(Number(leagueId), Number(seasonId), Number(teamId));
  } else {
    avgGoals = averageGoals();
  }

  if (avgGoals) {
    document.getElementById('avgGoals').innerText =
      `Average number of goals: ${avgGoals}`;
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
