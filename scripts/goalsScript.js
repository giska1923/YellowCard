import calc from './goals.js';

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

  const dataSet = document.getElementsByName('dataSet');
  let average = dataSet[1].checked;

  const goalsConceded = document.getElementById('conceded').checked;

  let result;

  if (leagueId && seasonId && teamId) {
    result = calc(
      Number(leagueId),
      Number(seasonId),
      Number(teamId),
      Number(matchDuration),
      average,
      goalsConceded
    );
  } else {
    result = calc();
  }

  if (result) {
    document.getElementById('calc').innerText = result;
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
