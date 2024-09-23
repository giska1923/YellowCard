import { calculateForAlerts, getAllLeagues } from './goals.js';

const getNumValue = inputVal => {
  return inputVal === '' ? undefined : Number(inputVal);
};

const getScoredOrConcededOptions = (option, comp, value) => {
  if (option === 'scored') {
    return [comp, value, undefined, undefined];
  } else {
    return [undefined, undefined, comp, value];
  }
};

const getHalfGoalsOptions = (half, comp, goals) => {
  if (half === '1st half') {
    return [comp, goals, undefined, undefined];
  } else {
    return [undefined, undefined, comp, goals];
  }
};

const getHomeTeamOptions = elements => {
  const [
    avgScoredHomeCondition,
    avgScoredHome,
    avgConcededHomeCondition,
    avgConcededHome,
  ] = getScoredOrConcededOptions(
    elements.avgHomeSCOpt,
    elements.avgHomeSCComp,
    elements.avgHomeSC
  );

  const [avg1HHomeCondition, avg1HHome, avg2HHomeCondition, avg2HHome] =
    getHalfGoalsOptions(
      elements.avgHomeHalf,
      elements.avgHomeHalfComp,
      elements.avgHomeHalfGoals
    );

  return {
    avgGoalsH: elements.avgH,
    avgGoalsHCondition: elements.avgHComp,
    avgGoalsHome: elements.avgHome,
    avgGoalsHomeCondition: elements.avgHomeComp,
    avgScoredHome,
    avgScoredHomeCondition,
    avgConcededHome,
    avgConcededHomeCondition,
    avg1HHome,
    avg1HHomeCondition,
    avg2HHome,
    avg2HHomeCondition,
  };
};

const getAwayTeamOptions = elements => {
  const [
    avgScoredAwayCondition,
    avgScoredAway,
    avgConcededAwayCondition,
    avgConcededAway,
  ] = getScoredOrConcededOptions(
    elements.avgAwaySCOpt,
    elements.avgAwaySCComp,
    elements.avgAwaySC
  );

  const [avg1HAwayCondition, avg1HAway, avg2HAwayCondition, avg2HAway] =
    getHalfGoalsOptions(
      elements.avgAwayHalf,
      elements.avgAwayHalfComp,
      elements.avgAwayHalfGoals
    );

  return {
    avgGoalsA: elements.avgA,
    avgGoalsACondition: elements.avgAComp,
    avgGoalsAway: elements.avgAway,
    avgGoalsAwayCondition: elements.avgAwayComp,
    avgScoredAway,
    avgScoredAwayCondition,
    avgConcededAway,
    avgConcededAwayCondition,
    avg1HAway,
    avg1HAwayCondition,
    avg2HAway,
    avg2HAwayCondition,
  };
};

const getOptions = elements => {
  const homeOptions = getHomeTeamOptions(elements);
  const awayOptions = getAwayTeamOptions(elements);

  return {
    avgGoalsH: homeOptions.avgGoalsH,
    avgGoalsHCondition: homeOptions.avgGoalsHCondition,
    avgGoalsA: awayOptions.avgGoalsA,
    avgGoalsACondition: awayOptions.avgGoalsACondition,
    avgGoalsHome: homeOptions.avgGoalsHome,
    avgGoalsHomeCondition: homeOptions.avgGoalsHomeCondition,
    avgGoalsAway: awayOptions.avgGoalsAway,
    avgGoalsAwayCondition: awayOptions.avgGoalsAwayCondition,
    avgScoredHome: homeOptions.avgScoredHome,
    avgScoredHomeCondition: homeOptions.avgScoredHomeCondition,
    avgConcededHome: homeOptions.avgConcededHome,
    avgConcededHomeCondition: homeOptions.avgConcededHomeCondition,
    avgScoredAway: awayOptions.avgScoredAway,
    avgScoredAwayCondition: awayOptions.avgScoredAwayCondition,
    avgConcededAway: awayOptions.avgConcededAway,
    avgConcededAwayCondition: awayOptions.avgConcededAwayCondition,
    avg1HHome: homeOptions.avg1HHome,
    avg1HHomeCondition: homeOptions.avg1HHomeCondition,
    avg2HHome: homeOptions.avg2HHome,
    avg2HHomeCondition: homeOptions.avg2HHomeCondition,
    avg1HAway: awayOptions.avg1HAway,
    avg1HAwayCondition: awayOptions.avg1HAwayCondition,
    avg2HAway: awayOptions.avg2HAway,
    avg2HAwayCondition: awayOptions.avg2HAwayCondition,
  };
};

async function beAlgo() {
  console.log('beAlgo - Button clicked');

  const elements = {
    resultElement: document.getElementById('beResult'),
    league: document.getElementById('beLeague').value,
    avgHComp: document.getElementById('beAvgHComp').value,
    avgH: getNumValue(document.getElementById('beAvgH').value),
    avgHomeComp: document.getElementById('beAvgHomeComp').value,
    avgHome: getNumValue(document.getElementById('beAvgHome').value),
    avgHomeSCOpt: document.getElementById('beAvgHomeSCOpt').value,
    avgHomeSCComp: document.getElementById('beAvgHomeSCComp').value,
    avgHomeSC: getNumValue(document.getElementById('beAvgHomeSC').value),
    avgHomeHalf: document.getElementById('beAvgHomeHalf').value,
    avgHomeHalfComp: document.getElementById('beAvgHomeHalfComp').value,
    avgHomeHalfGoals: getNumValue(
      document.getElementById('beAvgHomeHalfGoals').value
    ),
    avgAComp: document.getElementById('beAvgAComp').value,
    avgA: getNumValue(document.getElementById('beAvgA').value),
    avgAwayComp: document.getElementById('beAvgAwayComp').value,
    avgAway: getNumValue(document.getElementById('beAvgAway').value),
    avgAwaySCOpt: document.getElementById('beAvgAwaySCOpt').value,
    avgAwaySCComp: document.getElementById('beAvgAwaySCComp').value,
    avgAwaySC: getNumValue(document.getElementById('beAvgAwaySC').value),
    avgAwayHalf: document.getElementById('beAvgAwayHalf').value,
    avgAwayHalfComp: document.getElementById('beAvgAwayHalfComp').value,
    avgAwayHalfGoals: getNumValue(
      document.getElementById('beAvgAwayHalfGoals').value
    ),
  };

  const leagueId = getNumValue(elements.league);
  // HARDCODED
  const seasonId = leagueId === 271 ? 23584 : 23690;
  const previousSeasonId = leagueId === 271 ? 21644 : 21787;

  const options = getOptions(elements);

  const result = await calculateForAlerts(
    leagueId,
    seasonId,
    previousSeasonId,
    options
  );
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

//////////////////////// NOTIFICATIONS //////////////////////////

document.getElementById('beCalcBtn').addEventListener('click', () => {
  const message = 'Alert set successfully!';
  showPushNotification(message);
});

function playAlertSound() {
  const audio = document.getElementById('alertSound');
  audio.play().catch(error => {
    console.error('Audio playback failed:', error);
  });
}

function showPushNotification(message) {
  const notificationElement = document.getElementById('pushNotification');
  const messageElement = document.getElementById('notificationMessage');

  playAlertSound();

  // Set the message
  messageElement.textContent = message;

  // Add the 'show' class and remove 'hide' to display the notification
  notificationElement.classList.add('show');
  notificationElement.classList.remove('hide');

  // Automatically hide after 10 seconds
  setTimeout(() => {
    notificationElement.classList.add('hide');
    notificationElement.classList.remove('show');
  }, 5000);
}
