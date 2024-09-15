/**
 * Goals
 *
 * We use hardcoded leagueId seasonId pairs:
 *    1. Superliga 2023/2024 (leagueId = 271, seasonId = 21644)
 *    2. Premiership 2023/2024 (leagueId = 501, seasonId = 21787)
 */
import allFixtures from './data/allFixtures.js';
import allLeagues from './data/allLeagues.js';
import allSeasons from './data/allSeasons.js';
import allTeamsGoals from './data/allTeamsGoals.js';
//import fs from 'fs';

const compare = (actual, target, condition) => {
  if (condition === 'more') {
    return actual > target;
  } else if (condition === 'less') {
    return actual < target;
  }
  return false;
};

const getFixturesResults = fixtures => {
  return fixtures.map(data => {
    const homeTeam = data.participants.find(
      participant => participant.meta.location === 'home'
    );
    const awayTeam = data.participants.find(
      participant => participant.meta.location === 'away'
    );
    const homeGoals = data.scores.find(
      score =>
        score.description === '2ND_HALF' && score.score.participant === 'home'
    );
    const awayGoals = data.scores.find(
      score =>
        score.description === '2ND_HALF' && score.score.participant === 'away'
    );

    return `${homeTeam.name} : ${awayTeam.name} - ${homeGoals.score.goals} : ${awayGoals.score.goals}`;
  });
};

// Function for backtesting goals averages
const filterMatches = (
  leagueId = 271,
  seasonId = 21644,
  previousSeasonId = 19686,
  options = {},
  desiredOutcomeOptions
) => {
  const {
    avgGoalsH,
    avgGoalsHCondition,
    avgGoalsA,
    avgGoalsACondition,
    avgGoalsHome,
    avgGoalsHomeCondition,
    avgGoalsAway,
    avgGoalsAwayCondition,
    avgScoredHome,
    avgScoredHomeCondition,
    avgConcededHome,
    avgConcededHomeCondition,
    avgScoredAway,
    avgScoredAwayCondition,
    avgConcededAway,
    avgConcededAwayCondition,
    avg1HHome,
    avg1HHomeCondition,
    avg2HHome,
    avg2HHomeCondition,
    avg1HAway,
    avg1HAwayCondition,
    avg2HAway,
    avg2HAwayCondition,
  } = options;

  const {
    desiredAvgGoalsInGeneral,
    desiredAvgGoalsInGeneralCondition,
    desiredAvgGoalsHome,
    desiredAvgGoalsHomeCondition,
    desiredAvgGoalsAway,
    desiredAvgGoalsAwayCondition,
    desiredAvg1H,
    desiredAvg1HCondition,
    desiredAvg2H,
    desiredAvg2HCondition,
  } = desiredOutcomeOptions;

  const myTeamsGoals = allTeamsGoals.filter(
    team => team.seasonId === previousSeasonId
  );

  // Collect home teams that meet given criteria
  let homeTeams = [];
  for (const teamStats of myTeamsGoals) {
    // Criteria 1: Average total number of goals
    if (
      avgGoalsH !== undefined &&
      !compare(teamStats.averageGoals, avgGoalsH, avgGoalsHCondition)
    ) {
      continue;
    }

    // Criteria 2: Average goals at home
    if (
      avgGoalsHome !== undefined &&
      !compare(
        teamStats.averageGoalsScoredHome,
        avgGoalsHome,
        avgGoalsHomeCondition
      )
    ) {
      continue;
    }

    // Criteria 3: Average goals home team scored
    if (
      avgScoredHome !== undefined &&
      !compare(
        teamStats.averageGoalsScored,
        avgScoredHome,
        avgScoredHomeCondition
      )
    ) {
      continue;
    }

    // Criteria 4: Average goals home team conceded
    if (
      avgConcededHome !== undefined &&
      !compare(
        teamStats.averageGoalsConceded,
        avgConcededHome,
        avgConcededHomeCondition
      )
    ) {
      continue;
    }

    // Criteria 5: Average goals home team scored in 1H
    if (
      avg1HHome !== undefined &&
      !compare(
        (teamStats.averageFirstHalfGoalsScoredHome +
          teamStats.averageFirstHalfGoalsScoredAway) /
          2,
        avg1HHome,
        avg1HHomeCondition
      )
    ) {
      continue;
    }

    // Criteria 6: Average goals home team scored in 2H
    if (
      avg2HHome !== undefined &&
      !compare(
        (teamStats.averageSecondHalfGoalsScoredHome +
          teamStats.averageSecondHalfGoalsScoredAway) /
          2,
        avg2HHome,
        avg2HHomeCondition
      )
    ) {
      continue;
    }

    homeTeams.push(teamStats);
  }

  // Collect away teams that meet given criteria
  let awayTeams = [];
  for (const teamStats of myTeamsGoals) {
    // Criteria 1: Average total number of goals
    if (
      avgGoalsA !== undefined &&
      !compare(teamStats.averageGoals, avgGoalsA, avgGoalsACondition)
    ) {
      continue;
    }

    // Criteria 2: Average goals away
    if (
      avgGoalsAway !== undefined &&
      !compare(
        teamStats.averageGoalsScoredAway,
        avgGoalsAway,
        avgGoalsAwayCondition
      )
    ) {
      continue;
    }

    // Criteria 3: Average goals away team scored
    if (
      avgScoredAway !== undefined &&
      !compare(
        teamStats.averageGoalsScored,
        avgScoredAway,
        avgScoredAwayCondition
      )
    ) {
      continue;
    }

    // Criteria 4: Average goals away team conceded
    if (
      avgConcededAway !== undefined &&
      !compare(
        teamStats.averageGoalsConceded,
        avgConcededAway,
        avgConcededAwayCondition
      )
    ) {
      continue;
    }

    // Criteria 5: Average goals away team scored in 1H
    if (
      avg1HAway !== undefined &&
      !compare(
        (teamStats.averageFirstHalfGoalsScoredHome +
          teamStats.averageFirstHalfGoalsScoredAway) /
          2,
        avg1HAway,
        avg1HAwayCondition
      )
    ) {
      continue;
    }

    // Criteria 6: Average goals away team scored in 2H
    if (
      avg2HAway !== undefined &&
      !compare(
        (teamStats.averageSecondHalfGoalsScoredHome +
          teamStats.averageSecondHalfGoalsScoredAway) /
          2,
        avg2HAway,
        avg2HAwayCondition
      )
    ) {
      continue;
    }

    awayTeams.push(teamStats);
  }

  const myFixtures = allFixtures.filter(
    fixture => fixture.league_id === leagueId && fixture.season_id === seasonId
  );

  // Collect home & away fixtures that meet given criteria
  const fixturesMetCriteria = myFixtures.filter(match => {
    const { participants } = match;
    const { homeParticipant, awayParticipant } =
      participants[0].meta.location === 'home'
        ? {
            homeParticipant: participants[0],
            awayParticipant: participants[1],
          }
        : {
            homeParticipant: participants[1],
            awayParticipant: participants[0],
          };

    if (homeTeams.length === 0) {
      return awayTeams.some(stat => stat.teamId === awayParticipant.id);
    }
    if (awayTeams.length === 0) {
      return homeTeams.some(stat => stat.teamId === homeParticipant.id);
    }
    return (
      homeTeams.some(stat => stat.participantId === homeParticipant.id) &&
      awayTeams.some(stat => stat.participantId === awayParticipant.id)
    );
  });

  // Collect desired outcome fixtures that meet desired outcome criteria
  const fixturesDesiredOutcome = fixturesMetCriteria.filter(match => {
    let firstHalfGoalsScoredHome = 0;
    let firstHalfGoalsScoredAway = 0;
    let secondHalfGoalsScoredHome = 0;
    let secondHalfGoalsScoredAway = 0;
    // These will store cumulative scores
    let totalGoalsHome = 0;
    let totalGoalsAway = 0;
    // Iterate through fixture scores array
    match.scores.forEach(score => {
      // Needed to calculate average number of matches with entered amount of goals
      if (score.description === '1ST_HALF') {
        // Handle first-half cumulative goals
        if (score.score.participant === 'home') {
          firstHalfGoalsScoredHome = score.score.goals;
        } else {
          firstHalfGoalsScoredAway = score.score.goals;
        }
      } else if (score.description === '2ND_HALF') {
        // Handle second-half cumulative goals (end of match)
        if (score.score.participant === 'home') {
          totalGoalsHome = score.score.goals;
        } else {
          totalGoalsAway = score.score.goals;
        }
      }
    });
    // Calculate second-half goals by subtracting first half from total (2ND_HALF)
    secondHalfGoalsScoredHome = totalGoalsHome - firstHalfGoalsScoredHome;
    secondHalfGoalsScoredAway = totalGoalsAway - firstHalfGoalsScoredAway;

    // Criteria 1: Average total number of goals
    if (
      desiredAvgGoalsInGeneral !== undefined &&
      !compare(
        totalGoalsHome + totalGoalsAway,
        desiredAvgGoalsInGeneral,
        desiredAvgGoalsInGeneralCondition
      )
    ) {
      return false;
    }

    // Criteria 2: Average goals home team
    if (
      desiredAvgGoalsHome !== undefined &&
      !compare(
        totalGoalsHome,
        desiredAvgGoalsHome,
        desiredAvgGoalsHomeCondition
      )
    ) {
      return false;
    }

    // Criteria 3: Average goals away team
    if (
      desiredAvgGoalsAway !== undefined &&
      !compare(
        totalGoalsAway,
        desiredAvgGoalsAway,
        desiredAvgGoalsAwayCondition
      )
    ) {
      return false;
    }

    // Criteria 4: Average goals 1st half
    if (
      desiredAvg1H !== undefined &&
      !compare(
        firstHalfGoalsScoredHome + firstHalfGoalsScoredAway,
        desiredAvg1H,
        desiredAvg1HCondition
      )
    ) {
      return false;
    }

    // Criteria 5: Average goals 2nd half
    if (
      desiredAvg2H !== undefined &&
      !compare(
        secondHalfGoalsScoredHome + secondHalfGoalsScoredAway,
        desiredAvg2H,
        desiredAvg2HCondition
      )
    ) {
      return false;
    }

    return true;
  });

  console.log(getFixturesResults(fixturesMetCriteria));
  console.log(getFixturesResults(fixturesDesiredOutcome));

  return fixturesMetCriteria.length > 0
    ? (fixturesDesiredOutcome.length / fixturesMetCriteria.length) * 100
    : null;
};

// Function for backtesting goals percentages
const calcPercentages = (
  leagueId = 271,
  seasonId = 21644,
  previousSeasonId = 19686,
  options = {},
  desiredOutcomeOptions
) => {
  const {
    prcHPercentage,
    prcGoalsH,
    prcGoalsHCondition,
    prcAPercentage,
    prcGoalsA,
    prcGoalsACondition,
    prcHomeSCPercentage,
    prcScoredHome,
    prcScoredHomeCondition,
    prcConcededHome,
    prcConcededHomeCondition,
    prcAwaySCPercentage,
    prcScoredAway,
    prcScoredAwayCondition,
    prcConcededAway,
    prcConcededAwayCondition,
    prcHomeHalfGoalsPercentage,
    prc1HHome,
    prc1HHomeCondition,
    prc2HHome,
    prc2HHomeCondition,
    prcAwayHalfGoalsPercentage,
    prc1HAway,
    prc1HAwayCondition,
    prc2HAway,
    prc2HAwayCondition,
  } = options;

  const {
    desiredGoalsPercentage,
    desiredPrcGoalsInGeneral,
    desiredPrcGoalsInGeneralCondition,
    desiredPrcGoalsHome,
    desiredPrcGoalsHomeCondition,
    desiredPrcGoalsAway,
    desiredPrcGoalsAwayCondition,
    desiredPrc1H,
    desiredPrc1HCondition,
    desiredPrc2H,
    desiredPrc2HCondition,
  } = desiredOutcomeOptions;

  console.log(options);
  console.log(desiredOutcomeOptions);
};

// Function to calculate the average number of goals
const calc = (
  leagueId = 271,
  seasonId = 21644,
  participantId = 1020,
  exactNumGoals = -1 // -1 don't evaluate, average number of matches with scored goals
) => {
  // Filter the fixtures based on league_id and season_id
  const myFixtures = allFixtures.filter(
    fixture => fixture.league_id === leagueId && fixture.season_id === seasonId
  );

  // Iterate through my fixtures
  const result = myFixtures.reduce(
    (acc, fixture) => {
      // Skip the iteration if the current fixture does not include participant
      if (
        fixture.participants[0].id === participantId ||
        fixture.participants[1].id === participantId
      ) {
        acc.count += 1;

        let firstHalfGoalsScoredHome = 0;
        let firstHalfGoalsScoredAway = 0;
        let secondHalfGoalsScoredHome = 0;
        let secondHalfGoalsScoredAway = 0;
        let firstHalfGoalsConcededHome = 0;
        let firstHalfGoalsConcededAway = 0;
        let secondHalfGoalsConcededHome = 0;
        let secondHalfGoalsConcededAway = 0;

        // These will store cumulative scores
        let totalGoalsHome = 0;
        let totalGoalsAway = 0;
        let totalGoalsConcededHome = 0;
        let totalGoalsConcededAway = 0;

        // Iterate through fixture scores array
        fixture.scores.forEach(score => {
          // Needed to calculate average number of matches with entered amount of goals
          if (
            exactNumGoals >= 0 &&
            score.participant_id === participantId &&
            score.description === '2ND_HALF' &&
            exactNumGoals === score.score.goals
          ) {
            acc.totalExactNumGoals += 1;
          }
          if (score.description === '1ST_HALF') {
            // Handle first-half cumulative goals
            if (score.score.participant === 'home') {
              score.participant_id === participantId
                ? (firstHalfGoalsScoredHome = score.score.goals)
                : (firstHalfGoalsConcededHome = score.score.goals);
            } else {
              score.participant_id === participantId
                ? (firstHalfGoalsScoredAway = score.score.goals)
                : (firstHalfGoalsConcededAway = score.score.goals);
            }
          } else if (score.description === '2ND_HALF') {
            // Handle second-half cumulative goals (end of match)
            if (score.score.participant === 'home') {
              score.participant_id === participantId
                ? (totalGoalsHome = score.score.goals)
                : (totalGoalsConcededHome = score.score.goals);
            } else {
              score.participant_id === participantId
                ? (totalGoalsAway = score.score.goals)
                : (totalGoalsConcededAway = score.score.goals);
            }
          }
        });

        // Calculate second-half goals by subtracting first half from total (2ND_HALF)
        secondHalfGoalsScoredHome = totalGoalsHome - firstHalfGoalsScoredHome;
        secondHalfGoalsScoredAway = totalGoalsAway - firstHalfGoalsScoredAway;
        secondHalfGoalsConcededHome =
          totalGoalsConcededHome - firstHalfGoalsConcededHome;
        secondHalfGoalsConcededAway =
          totalGoalsConcededAway - firstHalfGoalsConcededAway;

        // Add match scores
        acc.fixtures.push({
          firstHalfGoalsScored:
            firstHalfGoalsScoredHome + firstHalfGoalsScoredAway,
          firstHalfGoalsConceded:
            firstHalfGoalsConcededHome + firstHalfGoalsConcededAway,
          secondHalfGoalsScored:
            secondHalfGoalsScoredHome + secondHalfGoalsScoredAway,
          secondHalfGoalsConceded:
            secondHalfGoalsConcededHome + secondHalfGoalsConcededAway,
          totalGoalsScored:
            firstHalfGoalsScoredHome +
            firstHalfGoalsScoredAway +
            secondHalfGoalsScoredHome +
            secondHalfGoalsScoredAway,
          totalGoalsConceded:
            firstHalfGoalsConcededHome +
            firstHalfGoalsConcededAway +
            secondHalfGoalsConcededHome +
            secondHalfGoalsConcededAway,
        });

        // Accumulate totals for full match
        acc.totalGoalsScoredHome += totalGoalsHome;
        acc.totalGoalsConcededHome += totalGoalsConcededHome;
        acc.totalGoalsScoredAway += totalGoalsAway;
        acc.totalGoalsConcededAway += totalGoalsConcededAway;

        // Accumulate first half totals
        acc.firstHalfGoalsScoredHome += firstHalfGoalsScoredHome;
        acc.firstHalfGoalsConcededHome += firstHalfGoalsConcededHome;
        acc.firstHalfGoalsScoredAway += firstHalfGoalsScoredAway;
        acc.firstHalfGoalsConcededAway += firstHalfGoalsConcededAway;

        // Accumulate second half totals
        acc.secondHalfGoalsScoredHome += secondHalfGoalsScoredHome;
        acc.secondHalfGoalsConcededHome += secondHalfGoalsConcededHome;
        acc.secondHalfGoalsScoredAway += secondHalfGoalsScoredAway;
        acc.secondHalfGoalsConcededAway += secondHalfGoalsConcededAway;

        // Iterate through fixture statistics array
        fixture.statistics.forEach(statistic => {
          if (
            statistic.type_id === 'Corners' &&
            statistic.participant_id === participantId
          ) {
            acc.totalCorners += statistic.data.value;
          }

          if (
            statistic.type_id === 'Yellowcards' &&
            statistic.participant_id === participantId
          ) {
            acc.totalYellowCards += statistic.data.value;
          }

          if (
            statistic.type_id === 'Redcards' &&
            statistic.participant_id === participantId
          ) {
            acc.totalRedCards += statistic.data.value;
          }
        });

        // Fixture participants array
        const participant = fixture.participants.find(
          p => p.id === participantId
        );
        const opponent = fixture.participants.find(p => p.id !== participantId);

        if (participant.meta.winner) {
          acc.totalWins += 1;
        } else if (!participant.meta.winner && opponent.meta.winner) {
          acc.totalLosts += 1;
        } else if (!participant.meta.winner && !opponent.meta.winner) {
          acc.totalDraws += 1;
        }

        if (participant.meta.location === 'home') {
          acc.countHome += 1;
        } else {
          acc.countAway += 1;
        }
      }

      return acc;
    },
    {
      count: 0,
      countHome: 0,
      countAway: 0,
      totalGoalsScoredHome: 0,
      totalGoalsScoredAway: 0,
      totalGoalsConcededHome: 0,
      totalGoalsConcededAway: 0,
      firstHalfGoalsScoredHome: 0,
      firstHalfGoalsScoredAway: 0,
      firstHalfGoalsConcededHome: 0,
      firstHalfGoalsConcededAway: 0,
      secondHalfGoalsScoredHome: 0,
      secondHalfGoalsScoredAway: 0,
      secondHalfGoalsConcededHome: 0,
      secondHalfGoalsConcededAway: 0,
      totalCorners: 0,
      totalYellowCards: 0,
      totalRedCards: 0,
      totalWins: 0,
      totalLosts: 0,
      totalDraws: 0,
      totalExactNumGoals: 0,
      fixtures: [],
    }
  );

  if (!result.count) return null;

  const ret = {
    ...result,
    leagueId,
    seasonId,
    participantId,
    totalGoals:
      result.totalGoalsScoredHome +
      result.totalGoalsScoredAway +
      result.totalGoalsConcededHome +
      result.totalGoalsConcededAway,
    totalGoalsScored: result.totalGoalsScoredHome + result.totalGoalsScoredAway,
    totalGoalsConceded:
      result.totalGoalsConcededHome + result.totalGoalsConcededAway,
    averageGoals: parseFloat(
      (
        (result.totalGoalsScoredHome +
          result.totalGoalsScoredAway +
          result.totalGoalsConcededHome +
          result.totalGoalsConcededAway) /
        result.count
      ).toFixed(4)
    ),
    averageGoalsScored: parseFloat(
      (
        (result.totalGoalsScoredHome + result.totalGoalsScoredAway) /
        result.count
      ).toFixed(4)
    ),
    averageGoalsConceded: parseFloat(
      (
        (result.totalGoalsConcededHome + result.totalGoalsConcededAway) /
        result.count
      ).toFixed(4)
    ),
    averageGoalsScoredHome: parseFloat(
      (result.totalGoalsScoredHome / result.countHome).toFixed(4)
    ),
    averageGoalsScoredAway: parseFloat(
      (result.totalGoalsScoredAway / result.countAway).toFixed(4)
    ),
    averageFirstHalfGoalsScoredHome: parseFloat(
      (result.firstHalfGoalsScoredHome / result.countHome).toFixed(4)
    ),
    averageSecondHalfGoalsScoredHome: parseFloat(
      (result.secondHalfGoalsScoredHome / result.countHome).toFixed(4)
    ),
    averageFirstHalfGoalsScoredAway: parseFloat(
      (result.firstHalfGoalsScoredAway / result.countAway).toFixed(4)
    ),
    averageSecondHalfGoalsScoredAway: parseFloat(
      (result.secondHalfGoalsScoredAway / result.countAway).toFixed(4)
    ),
    averageFirstHalfGoalsConcededHome: parseFloat(
      (result.firstHalfGoalsConcededHome / result.countHome).toFixed(4)
    ),
    averageSecondHalfGoalsConcededHome: parseFloat(
      (result.secondHalfGoalsConcededHome / result.countHome).toFixed(4)
    ),
    averageFirstHalfGoalsConcededAway: parseFloat(
      (result.firstHalfGoalsConcededAway / result.countAway).toFixed(4)
    ),
    averageSecondHalfGoalsConcededAway: parseFloat(
      (result.secondHalfGoalsConcededAway / result.countAway).toFixed(4)
    ),
    averageGoalsConcededHome: parseFloat(
      (result.totalGoalsConcededHome / result.countHome).toFixed(4)
    ),
    averageGoalsConcededAway: parseFloat(
      (result.totalGoalsConcededAway / result.countAway).toFixed(4)
    ),
    averageCorners: parseFloat((result.totalCorners / result.count).toFixed(4)),
    averageYellowCards: parseFloat(
      (result.totalYellowCards / result.count).toFixed(4)
    ),
    averageRedCards: parseFloat(
      (result.totalRedCards / result.count).toFixed(4)
    ),
    averageWinRatio: parseFloat(
      ((result.totalWins / result.count) * 100).toFixed(2)
    ),
    averageLoseRatio: parseFloat(
      ((result.totalLosts / result.count) * 100).toFixed(2)
    ),
    averageDrawRatio: parseFloat(
      ((result.totalDraws / result.count) * 100).toFixed(2)
    ),
    averageExactNumGoals: parseFloat(
      (result.totalExactNumGoals / result.count) * 100
    ).toFixed(2),
  };
  return ret;
};

function getAllLeagues() {
  return allLeagues;
}

function filterSeasonsByLeagueId(leagueId) {
  const filteredSeasons = allSeasons.filter(
    season => season.league_id === parseInt(leagueId)
  );
  return filteredSeasons.sort(
    (a, b) => new Date(b.starting_at) - new Date(a.starting_at)
  );
}

function getParticipants(leagueId, seasonId) {
  const fixtures = allFixtures.filter(
    fixture =>
      fixture.league_id === Number(leagueId) &&
      fixture.season_id === Number(seasonId)
  );

  const participantsSet = new Set();

  // Iterate over each fixture and add each participant to the Set
  fixtures.forEach(fixture => {
    fixture.participants.forEach(participant => {
      participantsSet.add(
        JSON.stringify({ id: participant.id, name: participant.name })
      ); // Add unique participant to the Set
    });
  });

  // Convert the Set back to an array of participant objects
  const uniqueParticipants = Array.from(participantsSet).map(participant =>
    JSON.parse(participant)
  );
  return uniqueParticipants;
}

function getParticpantIds(leagueId, seasonId) {
  const fixtures = allFixtures.filter(
    fixture =>
      fixture.league_id === Number(leagueId) &&
      fixture.season_id === Number(seasonId)
  );

  const participantsSet = new Set();

  // Iterate over each fixture and add each participant to the Set
  fixtures.forEach(fixture => {
    fixture.participants.forEach(participant => {
      participantsSet.add(participant.id);
    });
  });

  return Array.from(participantsSet);
}

// Collect all teams stats by calling calc function
const calcTeamStats = () => {
  const particantIds1 = getParticpantIds(271, 19686);
  const particantIds2 = getParticpantIds(501, 19735);
  const result = [];
  particantIds1.forEach(team => result.push(calc(271, 19686, team)));
  particantIds2.forEach(team => result.push(calc(501, 19735, team)));
  // fs.writeFile('output.json', JSON.stringify(result), err => {
  //   if (err) {
  //     console.error('Error writing file:', err);
  //   } else {
  //     console.log('File written successfully!');
  //   }
  // });
};

export {
  filterMatches,
  calcPercentages,
  calc,
  getAllLeagues,
  filterSeasonsByLeagueId,
  getParticipants,
  calcTeamStats,
};
