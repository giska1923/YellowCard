import { getAllLeagues } from './goals.js';

function beAlgo() {
  console.log('beAlgo - Button clicked');

  const resultElement = document.getElementById('beResult');
  const leagueId = document.getElementById('beLeague').value;
  const averageGoalsGeneralComparison =
    document.getElementById('beAvgComp').value;
  const averageGoalsGeneral = document.getElementById('beAvg').value;

  let result = null;

  console.log('leagueId: ', leagueId);
  console.log(
    'averageGoalsGeneral: ',
    averageGoalsGeneral,
    averageGoalsGeneralComparison
  );

  if (result) {
    document.getElementById('calc').innerText =
      `$ { result.averageExactNumGoals } %`;
    resultElement.classList.remove('inactive');
  } else {
    resultElement.classList.add('inactive');
  }
}

// Attach event listener to the button
document.getElementById('beCalcBtn').addEventListener('click', beAlgo);

document.addEventListener('DOMContentLoaded', () => {
  const leagueSelect = document.getElementById('beLeague');
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

  function init() {
    try {
      const allLeagues = getAllLeagues();
      populateSelectBox(leagueSelect, allLeagues, 'id', 'name');
      leagueSelect.value = defaultLeagueId;
    } catch (error) {
      console.error('Error initializing page:', error);
    }
  }

  init();
});
