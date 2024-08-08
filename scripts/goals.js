// import { averageGoals } from '../../backtesting/goals.js';

// Function to handle the average goals calculation
function calcAverage() {
  console.log('Button clicked');

  const leagueId = document.getElementById('league').value;
  const seasonId = document.getElementById('season').value;
  const teamId = document.getElementById('team').value;

  // const result = averageGoals(
  //   Number(leagueId),
  //   Number(seasonId),
  //   Number(teamId)
  // );

  const result = 'result';
  console.log(result);

  document.getElementById('result').innerText = result;
}

// Attach event listener to the button
document.getElementById('calculateBtn').addEventListener('click', calcAverage);

// JavaScript to handle tab switching
document.querySelectorAll('.sidebar a').forEach(tab => {
  tab.addEventListener('click', function () {
    document
      .querySelectorAll('.sidebar a')
      .forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});
