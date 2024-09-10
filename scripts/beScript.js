import { filterMatches, getAllLeagues } from './goals.js';

const getNumValue = inputVal => {
  return inputVal === '' ? undefined : Number(inputVal);
};

function beAlgo() {
  console.log('beAlgo - Button clicked');

  const resultElement = document.getElementById('beResult');
  const leagueId = getNumValue(document.getElementById('beLeague').value);

  // HARDCODED!
  let seasonId;
  if (leagueId === 271) {
    seasonId = 21644;
  } else {
    seasonId = 21787;
  }

  const avgGoalsHCondition = document.getElementById('beAvgHComp').value;
  const avgGoalsH = getNumValue(document.getElementById('beAvgH').value);
  const avgGoalsHomeCondition = document.getElementById('beAvgHomeComp').value;
  const avgGoalsHome = getNumValue(document.getElementById('beAvgHome').value);
  let avgScoredHomeCondition;
  let avgScoredHome;
  let avgConcededHomeCondition;
  let avgConcededHome;
  if (document.getElementById('beAvgHomeSCOpt').value === 'scored') {
    avgScoredHomeCondition = document.getElementById('beAvgHomeSCComp').value;
    avgScoredHome = getNumValue(document.getElementById('beAvgHomeSC').value);
  } else {
    avgConcededHomeCondition = document.getElementById('beAvgHomeSCComp').value;
    avgConcededHome = getNumValue(document.getElementById('beAvgHomeSC').value);
  }
  let avg1HHomeCondition;
  let avg1HHome;
  let avg2HHomeCondition;
  let avg2HHome;
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

  const avgGoalsACondition = document.getElementById('beAvgAComp').value;
  const avgGoalsA = getNumValue(document.getElementById('beAvgA').value);
  const avgGoalsAwayCondition = document.getElementById('beAvgAwayComp').value;
  const avgGoalsAway = getNumValue(document.getElementById('beAvgAway').value);
  let avgScoredAwayCondition;
  let avgScoredAway;
  let avgConcededAwayCondition;
  let avgConcededAway;
  if (document.getElementById('beAvgAwaySCOpt').value === 'scored') {
    avgScoredAwayCondition = document.getElementById('beAvgAwaySCComp').value;
    avgScoredAway = getNumValue(document.getElementById('beAvgAwaySC').value);
  } else {
    avgConcededAwayCondition = document.getElementById('beAvgAwaySCComp').value;
    avgConcededAway = getNumValue(document.getElementById('beAvgAwaySC').value);
  }
  let avg1HAwayCondition;
  let avg1HAway;
  let avg2HAwayCondition;
  let avg2HAway;
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

  let desiredAvgGoalsInGeneral;
  let desiredAvgGoalsInGeneralCondition;
  let desiredAvgGoalsHome;
  let desiredAvgGoalsHomeCondition;
  let desiredAvgGoalsAway;
  let desiredAvgGoalsAwayCondition;
  let desiredAvg1H;
  let desiredAvg1HCondition;
  let desiredAvg2H;
  let desiredAvg2HCondition;
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

  console.log('leagueId: ', leagueId);
  const options = {
    avgGoalsH: avgGoalsH,
    avgGoalsHCondition: avgGoalsHCondition,
    avgGoalsA: avgGoalsA,
    avgGoalsACondition: avgGoalsACondition,
    avgGoalsHome: avgGoalsHome,
    avgGoalsHomeCondition: avgGoalsHomeCondition,
    avgGoalsAway: avgGoalsAway,
    avgGoalsAwayCondition: avgGoalsAwayCondition,
    avgScoredHome: avgScoredHome,
    avgScoredHomeCondition: avgScoredHomeCondition,
    avgConcededHome: avgConcededHome,
    avgConcededHomeCondition: avgConcededHomeCondition,
    avgScoredAway: avgScoredAway,
    avgScoredAwayCondition: avgScoredAwayCondition,
    avgConcededAway: avgConcededAway,
    avgConcededAwayCondition: avgConcededAwayCondition,
    avg1HHome: avg1HHome,
    avg1HHomeCondition: avg1HHomeCondition,
    avg2HHome: avg2HHome,
    avg2HHomeCondition: avg2HHomeCondition,
    avg1HAway: avg1HAway,
    avg1HAwayCondition: avg1HAwayCondition,
    avg2HAway: avg2HAway,
    avg2HAwayCondition: avg2HAwayCondition,
  };
  const desiredOutcomeOptions = {
    desiredAvgGoalsInGeneral: desiredAvgGoalsInGeneral,
    desiredAvgGoalsInGeneralCondition: desiredAvgGoalsInGeneralCondition,
    desiredAvgGoalsHome: desiredAvgGoalsHome,
    desiredAvgGoalsHomeCondition: desiredAvgGoalsHomeCondition,
    desiredAvgGoalsAway: desiredAvgGoalsAway,
    desiredAvgGoalsAwayCondition: desiredAvgGoalsAwayCondition,
    desiredAvg1H: desiredAvg1H,
    desiredAvg1HCondition: desiredAvg1HCondition,
    desiredAvg2H: desiredAvg2H,
    desiredAvg2HCondition: desiredAvg2HCondition,
  };

  const result = filterMatches(
    leagueId,
    seasonId,
    options,
    desiredOutcomeOptions
  );

  if (result) {
    resultElement.innerText = `${result} %`;
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
