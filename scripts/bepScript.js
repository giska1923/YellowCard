import { calcPercentages, getAllLeagues } from './goals.js';

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
    prcScoredHomeCondition,
    prcScoredHome,
    prcConcededHomeCondition,
    prcConcededHome,
  ] = getScoredOrConcededOptions(
    elements.prcHomeSCOpt,
    elements.prcHomeSCComp,
    elements.prcHomeSC
  );

  const [prc1HHomeCondition, prc1HHome, prc2HHomeCondition, prc2HHome] =
    getHalfGoalsOptions(
      elements.prcHomeHalf,
      elements.prcHomeHalfComp,
      elements.prcHomeHalfGoals
    );

  return {
    prcHPercentage: elements.prcHPercentage,
    prcGoalsH: elements.prcH,
    prcGoalsHCondition: elements.prcHComp,
    prcHomeSCPercentage: elements.prcHomeSCPercentage,
    prcScoredHome,
    prcScoredHomeCondition,
    prcConcededHome,
    prcConcededHomeCondition,
    prcHomeHalfGoalsPercentage: elements.prcHomeHalfGoalsPercentage,
    prc1HHome,
    prc1HHomeCondition,
    prc2HHome,
    prc2HHomeCondition,
  };
};

const getAwayTeamOptions = elements => {
  const [
    prcScoredAwayCondition,
    prcScoredAway,
    prcConcededAwayCondition,
    prcConcededAway,
  ] = getScoredOrConcededOptions(
    elements.prcAwaySCOpt,
    elements.prcAwaySCComp,
    elements.prcAwaySC
  );

  const [prc1HAwayCondition, prc1HAway, prc2HAwayCondition, prc2HAway] =
    getHalfGoalsOptions(
      elements.prcAwayHalf,
      elements.prcAwayHalfComp,
      elements.prcAwayHalfGoals
    );

  return {
    prcAPercentage: elements.prcAPercentage,
    prcGoalsA: elements.prcA,
    prcGoalsACondition: elements.prcAComp,
    prcAwaySCPercentage: elements.prcAwaySCPercentage,
    prcScoredAway,
    prcScoredAwayCondition,
    prcConcededAway,
    prcConcededAwayCondition,
    prcAwayHalfGoalsPercentage: elements.prcAwayHalfGoalsPercentage,
    prc1HAway,
    prc1HAwayCondition,
    prc2HAway,
    prc2HAwayCondition,
  };
};

const getOptions = elements => {
  const homeOptions = getHomeTeamOptions(elements);
  const awayOptions = getAwayTeamOptions(elements);

  return {
    prcHPercentage: homeOptions.prcHPercentage,
    prcGoalsH: homeOptions.prcGoalsH,
    prcGoalsHCondition: homeOptions.prcGoalsHCondition,
    prcAPercentage: awayOptions.prcAPercentage,
    prcGoalsA: awayOptions.prcGoalsA,
    prcGoalsACondition: awayOptions.prcGoalsACondition,
    prcHomeSCPercentage: homeOptions.prcHomeSCPercentage,
    prcScoredHome: homeOptions.prcScoredHome,
    prcScoredHomeCondition: homeOptions.prcScoredHomeCondition,
    prcConcededHome: homeOptions.prcConcededHome,
    prcConcededHomeCondition: homeOptions.prcConcededHomeCondition,
    prcAwaySCPercentage: awayOptions.prcAwaySCPercentage,
    prcScoredAway: awayOptions.prcScoredAway,
    prcScoredAwayCondition: awayOptions.prcScoredAwayCondition,
    prcConcededAway: awayOptions.prcConcededAway,
    prcConcededAwayCondition: awayOptions.prcConcededAwayCondition,
    prcHomeHalfGoalsPercentage: homeOptions.prcHomeHalfGoalsPercentage,
    prc1HHome: homeOptions.prc1HHome,
    prc1HHomeCondition: homeOptions.prc1HHomeCondition,
    prc2HHome: homeOptions.prc2HHome,
    prc2HHomeCondition: homeOptions.prc2HHomeCondition,
    prcAwayHalfGoalsPercentage: awayOptions.prcAwayHalfGoalsPercentage,
    prc1HAway: awayOptions.prc1HAway,
    prc1HAwayCondition: awayOptions.prc1HAwayCondition,
    prc2HAway: awayOptions.prc2HAway,
    prc2HAwayCondition: awayOptions.prc2HAwayCondition,
  };
};

const getDesiredOutcomeOptions = elements => {
  switch (elements.desiredCriteria) {
    case 'Total number of goals':
      return {
        desiredGoalsPercentage: elements.desiredGoalsPercentage,
        desiredPrcGoalsInGeneral: elements.desiredGoals,
        desiredPrcGoalsInGeneralCondition: elements.desiredComp,
      };
    case '1st Half':
      return {
        desiredGoalsPercentage: elements.desiredGoalsPercentage,
        desiredPrc1H: elements.desiredGoals,
        desiredPrc1HCondition: elements.desiredComp,
      };
    case '2nd Half':
      return {
        desiredGoalsPercentage: elements.desiredGoalsPercentage,
        desiredPrc2H: elements.desiredGoals,
        desiredPrc2HCondition: elements.desiredComp,
      };
    case 'Home':
      return {
        desiredGoalsPercentage: elements.desiredGoalsPercentage,
        desiredPrcGoalsHome: elements.desiredGoals,
        desiredPrcGoalsHomeCondition: elements.desiredComp,
      };
    case 'Away':
    default:
      return {
        desiredGoalsPercentage: elements.desiredGoalsPercentage,
        desiredPrcGoalsAway: elements.desiredGoals,
        desiredPrcGoalsAwayCondition: elements.desiredComp,
      };
  }
};

const displayResult = (result, resultElement) => {
  resultElement.innerText = result ? `${result} %` : '0%';
  resultElement.classList.remove('inactive');
};

function beAlgo() {
  console.log('beAlgo - Button clicked');

  const elements = {
    resultElement: document.getElementById('beResult'),
    league: document.getElementById('beLeague').value,
    prcHPercentage: getNumValue(
      document.getElementById('bePrcHPercentage').value
    ),
    prcHComp: document.getElementById('bePrcHComp').value,
    prcH: getNumValue(document.getElementById('bePrcH').value),
    prcHomeSCPercentage: getNumValue(
      document.getElementById('bePrcHomeSCPercentage').value
    ),
    prcHomeSCOpt: document.getElementById('bePrcHomeSCOpt').value,
    prcHomeSCComp: document.getElementById('bePrcHomeSCComp').value,
    prcHomeSC: getNumValue(document.getElementById('bePrcHomeSC').value),
    prcHomeHalfGoalsPercentage: getNumValue(
      document.getElementById('bePrcHomeHalfGoalsPercentage').value
    ),
    prcHomeHalf: document.getElementById('bePrcHomeHalf').value,
    prcHomeHalfComp: document.getElementById('bePrcHomeHalfComp').value,
    prcHomeHalfGoals: getNumValue(
      document.getElementById('bePrcHomeHalfGoals').value
    ),
    prcAPercentage: getNumValue(
      document.getElementById('bePrcAPercentage').value
    ),
    prcAComp: document.getElementById('bePrcAComp').value,
    prcA: getNumValue(document.getElementById('bePrcA').value),
    prcAwaySCPercentage: getNumValue(
      document.getElementById('bePrcAwaySCPercentage').value
    ),
    prcAwaySCOpt: document.getElementById('bePrcAwaySCOpt').value,
    prcAwaySCComp: document.getElementById('bePrcAwaySCComp').value,
    prcAwaySC: getNumValue(document.getElementById('bePrcAwaySC').value),
    prcAwayHalfGoalsPercentage: getNumValue(
      document.getElementById('bePrcAwayHalfGoalsPercentage').value
    ),
    prcAwayHalf: document.getElementById('bePrcAwayHalf').value,
    prcAwayHalfComp: document.getElementById('bePrcAwayHalfComp').value,
    prcAwayHalfGoals: getNumValue(
      document.getElementById('bePrcAwayHalfGoals').value
    ),
    desiredGoalsPercentage: getNumValue(
      document.getElementById('beDesiredGoalsPercentage').value
    ),
    desiredCriteria: document.getElementById('beDesiredCriteria').value,
    desiredComp: document.getElementById('beDesiredComp').value,
    desiredGoals: getNumValue(document.getElementById('beDesiredGoals').value),
  };

  const leagueId = getNumValue(elements.league);
  // HARDCODED
  const seasonId = leagueId === 271 ? 21644 : 21787;
  const previousSeasonId = leagueId === 271 ? 19686 : 19735;

  const options = getOptions(elements);
  const desiredOutcomeOptions = getDesiredOutcomeOptions(elements);

  const result = calcPercentages(
    leagueId,
    seasonId,
    previousSeasonId,
    options,
    desiredOutcomeOptions
  );

  displayResult(result, elements.resultElement);
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
