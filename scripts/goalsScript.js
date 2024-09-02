import { getAllLeagues } from './goals.js';

const getNumValue = inputVal => {
  return inputVal === '' ? NaN : Number(inputVal);
};

function beAlgo() {
  console.log('beAlgo - Button clicked');

  const resultElement = document.getElementById('beResult');
  const leagueId = document.getElementById('beLeague').value;

  const avgGoalsInGeneralCondition = document.getElementById('beAvgComp').value;
  const avgGoalsInGeneral = getNumValue(document.getElementById('beAvg').value);

  const avgGoalsHomeCondition = document.getElementById('beAvgHomeComp').value;
  const avgGoalsHome = getNumValue(document.getElementById('beAvgHome').value);
  var avgScoredHomeCondition;
  var avgScoredHome;
  var avgConcededHomeCondition;
  var avgConcededHome;
  if (document.getElementById('beAvgHomeSCOpt').value === 'scored') {
    avgScoredHomeCondition = document.getElementById('beAvgHomeSCComp').value;
    avgScoredHome = getNumValue(document.getElementById('beAvgHomeSC').value);
  } else {
    avgConcededHomeCondition = document.getElementById('beAvgHomeSCComp').value;
    avgConcededHome = getNumValue(document.getElementById('beAvgHomeSC').value);
  }
  var avg1HHomeCondition;
  var avg1HHome;
  var avg2HHomeCondition;
  var avg2HHome;
  if (document.getElementById('beAvgHomeHalf').value === '1st half') {
    avg1HHomeCondition = document.getElementById('beAvgHomeHalfComp').value;
    avg1HHome = getNumValue(
      document.getElementById('beAvgHomeHalfGoals').value
    );
  } else {
    avg2HHomeCondition = document.getElementById('beAvgHomeHalfComp').value;
    avg2HHome = getNumValue(
      document.getElementById('beAvgHomeHalfGoals').value
    );
  }

  const avgGoalsAwayCondition = document.getElementById('beAvgAwayComp').value;
  const avgGoalsAway = getNumValue(document.getElementById('beAvgAway').value);
  var avgScoredAwayCondition;
  var avgScoredAway;
  var avgConcededAwayCondition;
  var avgConcededAway;
  if (document.getElementById('beAvgAwaySCOpt').value === 'scored') {
    avgScoredAwayCondition = document.getElementById('beAvgAwaySCComp').value;
    avgScoredAway = getNumValue(document.getElementById('beAvgAwaySC').value);
  } else {
    avgConcededAwayCondition = document.getElementById('beAvgAwaySCComp').value;
    avgConcededAway = getNumValue(document.getElementById('beAvgAwaySC').value);
  }
  var avg1HAwayCondition;
  var avg1HAway;
  var avg2HAwayCondition;
  var avg2HAway;
  if (document.getElementById('beAvgAwayHalf').value === '1st half') {
    avg1HAwayCondition = document.getElementById('beAvgAwayHalfComp').value;
    avg1HAway = getNumValue(
      document.getElementById('beAvgAwayHalfGoals').value
    );
  } else {
    avg2HAwayCondition = document.getElementById('beAvgAwayHalfComp').value;
    avg2HAway = getNumValue(
      document.getElementById('beAvgAwayHalfGoals').value
    );
  }

  var desiredAvgGoalsInGeneral;
  var desiredAvgGoalsInGeneralCondition;
  var desiredAvgGoalsHome;
  var desiredAvgGoalsHomeCondition;
  var desiredAvgGoalsAway;
  var desiredAvgGoalsAwayCondition;
  var desiredAvg1H;
  var desiredAvg1HCondition;
  var desiredAvg2H;
  var desiredAvg2HCondition;
  if (
    document.getElementById('beDesiredCriteria').value ===
    'Total number of goals'
  ) {
    desiredAvgGoalsInGeneralCondition =
      document.getElementById('beDesiredComp').value;
    desiredAvgGoalsInGeneral = getNumValue(
      document.getElementById('beDesiredGoals').value
    );
  } else if (
    document.getElementById('beDesiredCriteria').value === '1st Half'
  ) {
    desiredAvg1HCondition = document.getElementById('beDesiredComp').value;
    desiredAvg1H = getNumValue(document.getElementById('beDesiredGoals').value);
  } else if (
    document.getElementById('beDesiredCriteria').value === '2nd Half'
  ) {
    desiredAvg2HCondition = document.getElementById('beDesiredComp').value;
    desiredAvg2H = getNumValue(document.getElementById('beDesiredGoals').value);
  } else if (document.getElementById('beDesiredCriteria').value === 'Home') {
    desiredAvgGoalsHomeCondition =
      document.getElementById('beDesiredComp').value;
    desiredAvgGoalsHome = getNumValue(
      document.getElementById('beDesiredGoals').value
    );
  } else {
    desiredAvgGoalsAwayCondition =
      document.getElementById('beDesiredComp').value;
    desiredAvgGoalsAway = getNumValue(
      document.getElementById('beDesiredGoals').value
    );
  }

  let result = null;

  console.log('leagueId: ', leagueId);
  const options = {
    avgGoalsInGeneral: Number(avgGoalsInGeneral),
    avgGoalsInGeneralCondition: avgGoalsInGeneralCondition,
    avgGoalsHome: Number(avgGoalsHome),
    avgGoalsHomeCondition: avgGoalsHomeCondition,
    avgGoalsAway: Number(avgGoalsAway),
    avgGoalsAwayCondition: avgGoalsAwayCondition,
    avgScoredHome: Number(avgScoredHome),
    avgScoredHomeCondition: avgScoredHomeCondition,
    avgConcededHome: Number(avgConcededHome),
    avgConcededHomeCondition: avgConcededHomeCondition,
    avgScoredAway: Number(avgScoredAway),
    avgScoredAwayCondition: avgScoredAwayCondition,
    avgConcededAway: Number(avgConcededAway),
    avgConcededAwayCondition: avgConcededAwayCondition,
    avg1HHome: Number(avg1HHome),
    avg1HHomeCondition: avg1HHomeCondition,
    avg2HHome: Number(avg2HHome),
    avg2HHomeCondition: avg2HHomeCondition,
    avg1HAway: Number(avg1HAway),
    avg1HAwayCondition: avg1HAwayCondition,
    avg2HAway: Number(avg2HAway),
    avg2HAwayCondition: avg2HAwayCondition,
  };
  const desiredOutcomeOptions = {
    desiredAvgGoalsInGeneral: Number(desiredAvgGoalsInGeneral),
    desiredAvgGoalsInGeneralCondition: desiredAvgGoalsInGeneralCondition,
    desiredAvgGoalsHome: Number(desiredAvgGoalsHome),
    desiredAvgGoalsHomeCondition: desiredAvgGoalsHomeCondition,
    desiredAvgGoalsAway: Number(desiredAvgGoalsAway),
    desiredAvgGoalsAwayCondition: desiredAvgGoalsAwayCondition,
    desiredAvg1H: Number(desiredAvg1H),
    desiredAvg1HCondition: desiredAvg1HCondition,
    desiredAvg2H: Number(desiredAvg2H),
    desiredAvg2HCondition: desiredAvg2HCondition,
  };

  console.log(options);
  console.log(desiredOutcomeOptions);

  if (result) {
    document.getElementById(
      'calc'
    ).innerText = `$ { result.averageExactNumGoals } %`;
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
