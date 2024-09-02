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

const compare = (actual, target, condition) => {
  if (condition === 'more') {
    return actual > target;
  } else if (condition === 'less') {
    return actual < target;
  }
  return false;
};

const filterMatches = (
  leagueId = 271,
  seasonId = 17328,
  options = {},
  desiredOutcomeOptions
) => {
  const {
    avgGoalsInGeneral,
    avgGoalsInGeneralCondition,
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

  const myFixtures = allFixtures.filter(
    fixture => fixture.league_id === leagueId && fixture.season_id === seasonId
  );

  // Collect home & away fixtures that meet given criteria
  const fixturesMetCriteria = myFixtures.filter(match => {
    const { participants } = match;

    for (const participant of participants) {
      const participantId = participant.id;
      const teamStats = allTeamsGoals.find(
        team => team.teamId === participantId
      );

      if (!teamStats) {
        return false; // Skip if no stats found for the team
      }

      // Criteria 1: Average total number of goals
      if (
        avgGoalsInGeneral !== NaN &&
        !compare(
          teamStats.averageGoals,
          avgGoalsInGeneral,
          avgGoalsInGeneralCondition
        )
      ) {
        return false;
      }

      // Criteria 2: Average goals home team
      if (
        avgGoalsHome !== NaN &&
        participant.meta.location === 'home' &&
        !compare(teamStats.averageGoals, avgGoalsHome, avgGoalsHomeCondition)
      ) {
        return false;
      }

      // Criteria 3: Average goals away team
      if (
        avgGoalsAway !== NaN &&
        participant.meta.location === 'away' &&
        !compare(teamStats.averageGoals, avgGoalsAway, avgGoalsAwayCondition)
      ) {
        return false;
      }

      // Criteria 4: Average goals home team scored
      if (
        avgScoredHome !== NaN &&
        participant.meta.location === 'home' &&
        !compare(
          teamStats.averageGoalsScoredHome,
          avgScoredHome,
          avgScoredHomeCondition
        )
      ) {
        return false;
      }

      // Criteria 5: Average goals home team conceded
      if (
        avgConcededHome !== NaN &&
        participant.meta.location === 'home' &&
        !compare(
          teamStats.averageGoalsConcededHome,
          avgConcededHome,
          avgConcededHomeCondition
        )
      ) {
        return false;
      }

      // Criteria 6: Average goals away team scored
      if (
        avgScoredAway !== NaN &&
        participant.meta.location === 'away' &&
        !compare(
          teamStats.averageGoalsScoredAway,
          avgScoredAway,
          avgScoredAwayCondition
        )
      ) {
        return false;
      }

      // Criteria 7: Average goals away team conceded
      if (
        avgConcededAway !== NaN &&
        participant.meta.location === 'away' &&
        !compare(
          teamStats.averageGoalsConcededAway,
          avgConcededAway,
          avgConcededAwayCondition
        )
      ) {
        return false;
      }

      // Criteria 8: Average goals home team scored in 1H
      if (
        avg1HHome !== NaN &&
        participant.meta.location === 'home' &&
        !compare(
          teamStats.averageFirstHalfGoalsScoredHome,
          avg1HHome,
          avg1HHomeCondition
        )
      ) {
        return false;
      }

      // Criteria 9: Average goals home team scored in 2H
      if (
        avg2HHome !== NaN &&
        participant.meta.location === 'home' &&
        !compare(
          teamStats.averageSecondHalfGoalsScoredHome,
          avg2HHome,
          avg2HHomeCondition
        )
      ) {
        return false;
      }

      // Criteria 10: Average goals away team scored in 1H
      if (
        avg1HAway !== NaN &&
        participant.meta.location === 'away' &&
        !compare(
          teamStats.averageFirstHalfGoalsScoredAway,
          avg1HAway,
          avg1HAwayCondition
        )
      ) {
        return false;
      }

      // Criteria 11: Average goals away team scored in 2H
      if (
        avg2HAway !== NaN &&
        participant.meta.location === 'away' &&
        !compare(
          teamStats.averageSecondHalfGoalsScoredAway,
          avg2HAway,
          avg2HAwayCondition
        )
      ) {
        return false;
      }
    }

    return true;
  });

  // Collect desired outcome fixtures that meet desired outcome criteria
  const fixturesDesiredOutcome = myFixtures.filter(match => {
    const { participants } = match;

    for (const participant of participants) {
      const participantId = participant.id;
      const teamStats = allTeamsGoals.find(
        team => team.teamId === participantId
      );

      if (!teamStats) {
        return false; // Skip if no stats found for the team
      }

      // Criteria 1: Average total number of goals
      if (
        desiredAvgGoalsInGeneral !== NaN &&
        !compare(
          teamStats.averageGoals,
          desiredAvgGoalsInGeneral,
          desiredAvgGoalsInGeneralCondition
        )
      ) {
        return false;
      }

      // Criteria 2: Average goals home team
      if (
        desiredAvgGoalsHome !== NaN &&
        participant.meta.location === 'home' &&
        !compare(
          teamStats.averageGoals,
          desiredAvgGoalsHome,
          desiredAvgGoalsHomeCondition
        )
      ) {
        return false;
      }

      // Criteria 3: Average goals away team
      if (
        desiredAvgGoalsAway !== NaN &&
        participant.meta.location === 'away' &&
        !compare(
          teamStats.averageGoals,
          desiredAvgGoalsAway,
          desiredAvgGoalsAwayCondition
        )
      ) {
        return false;
      }

      // Criteria 4: Average goals 1st half
      if (desiredAvg1H !== NaN) {
        const statAvg =
          (teamStats.averageFirstHalfGoalsScoredHome +
            teamStats.averageFirstHalfGoalsScoredAway) /
          2;
        if (!compare(statAvg, desiredAvg1H, desiredAvg1HCondition)) {
          return false;
        }
      }

      // Criteria 5: Average goals 2nd half
      if (desiredAvg2H !== NaN) {
        const statAvg =
          (teamStats.averageSecondHalfGoalsScoredHome +
            teamStats.averageSecondHalfGoalsScoredAway) /
          2;
        if (!compare(statAvg, desiredAvg2H, desiredAvg2HCondition)) {
          return false;
        }
      }
    }

    return true;
  });

  console.log(fixturesMetCriteria);
  console.log(fixturesDesiredOutcome);

  return fixturesMetCriteria.length > 0
    ? (fixturesDesiredOutcome.length / fixturesMetCriteria.length) * 100
    : 0;
};

// Function to calculate the average number of goals
const calc = (
  leagueId = 271,
  seasonId = 17328,
  participantId = 1020,
  exactNumGoals = -1 // -1 don't evaluate, average number of matches with scored goals
) => {
  // -------------------------------------------------------------------
  // Example usage
  const options = {
    avgGoalsInGeneral: 2.8,
    avgGoalsInGeneralCondition: 'more',
    avgGoalsHome: 2.75,
    avgGoalsHomeCondition: 'more',
    avgGoalsAway: 2.9,
    avgGoalsAwayCondition: 'more',
  };
  const desiredOutcomeOptions = {
    desiredAvgGoalsAway: 2.2,
    desiredAvgGoalsAwayCondition: 'less',
  };

  const filteredMatches = filterMatches(
    leagueId,
    seasonId,
    options,
    desiredOutcomeOptions
  );
  console.log(filteredMatches);
  // -------------------------------------------------------------------

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
    }
  );

  if (!result.count) return null;
  return {
    ...result,
    totalGoals:
      result.totalGoalsScoredHome +
      result.totalGoalsScoredAway +
      result.totalGoalsConcededHome +
      result.totalGoalsConcededAway,
    totalGoalsScored: result.totalGoalsScoredHome + result.totalGoalsScoredAway,
    totalGoalsConceded:
      result.totalGoalsConcededHome + result.totalGoalsConcededAway,
    averageGoals: (
      (result.totalGoalsScoredHome +
        result.totalGoalsScoredAway +
        result.totalGoalsConcededHome +
        result.totalGoalsConcededAway) /
      result.count
    ).toFixed(4),
    averageGoalsScored: (
      (result.totalGoalsScoredHome + result.totalGoalsScoredAway) /
      result.count
    ).toFixed(4),
    averageGoalsConceded: (
      (result.totalGoalsConcededHome + result.totalGoalsConcededAway) /
      result.count
    ).toFixed(4),
    averageGoalsScoredHome: (
      result.totalGoalsScoredHome / result.countHome
    ).toFixed(4),
    averageGoalsScoredAway: (
      result.totalGoalsScoredAway / result.countAway
    ).toFixed(4),
    averageFirstHalfGoalsScoredHome: (
      result.firstHalfGoalsScoredHome / result.countHome
    ).toFixed(4),
    averageSecondHalfGoalsScoredHome: (
      result.secondHalfGoalsScoredHome / result.countHome
    ).toFixed(4),
    averageFirstHalfGoalsScoredAway: (
      result.firstHalfGoalsScoredAway / result.countAway
    ).toFixed(4),
    averageSecondHalfGoalsScoredAway: (
      result.secondHalfGoalsScoredAway / result.countAway
    ).toFixed(4),
    averageFirstHalfGoalsConcededHome: (
      result.firstHalfGoalsConcededHome / result.countHome
    ).toFixed(4),
    averageSecondHalfGoalsConcededHome: (
      result.secondHalfGoalsConcededHome / result.countHome
    ).toFixed(4),
    averageFirstHalfGoalsConcededAway: (
      result.firstHalfGoalsConcededAway / result.countAway
    ).toFixed(4),
    averageSecondHalfGoalsConcededAway: (
      result.secondHalfGoalsConcededAway / result.countAway
    ).toFixed(4),
    averageGoalsConcededHome: (
      result.totalGoalsConcededHome / result.countHome
    ).toFixed(4),
    averageGoalsConcededAway: (
      result.totalGoalsConcededAway / result.countAway
    ).toFixed(4),
    averageCorners: (result.totalCorners / result.count).toFixed(4),
    averageYellowCards: (result.totalYellowCards / result.count).toFixed(4),
    averageRedCards: (result.totalRedCards / result.count).toFixed(4),
    averageWinRatio: ((result.totalWins / result.count) * 100).toFixed(2),
    averageLoseRatio: ((result.totalLosts / result.count) * 100).toFixed(2),
    averageDrawRatio: ((result.totalDraws / result.count) * 100).toFixed(2),
    averageExactNumGoals: (
      (result.totalExactNumGoals / result.count) *
      100
    ).toFixed(2),
  };
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

export { calc, getAllLeagues, filterSeasonsByLeagueId, getParticipants };
