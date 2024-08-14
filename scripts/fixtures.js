/**
 * Goals
 *
 * Default values:
 * League Name/ID: Superliga / 271
 * Season Name/ID: 2020/2021 / 17328
 * Team Name/ID: AaB / 1020
 */
import allFixtures from './data/allFixtures.js';
import allLeagues from './data/allLeagues.js';
import allSeasons from './data/allSeasons.js';
import allTeams from './data/allTeams.js';

// Function to calculate the average number of goals
const calc = (
  leagueId = 271,
  seasonId = 17328,
  participantId = 1020,
  matchDuration = 0, // 0 - whole, 1 - 1st half, 2 - 2nd half,
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
        let firstHalfGoalsScored = 0;
        let secondHalfGoalsScored = 0;
        let firstHalfGoalsConceded = 0;
        let secondHalfGoalsConceded = 0;
        acc.count += 1;

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
          if (matchDuration === 0 && score.description === '2ND_HALF') {
            score.participant_id === participantId
              ? (acc.totalGoalsScored += score.score.goals)
              : (acc.totalGoalsConceded += score.score.goals);
          } else if (matchDuration === 1 && score.description === '1ST_HALF') {
            score.participant_id === participantId
              ? (acc.totalGoalsScored += score.score.goals)
              : (acc.totalGoalsConceded += score.score.goals);
          } else if (matchDuration === 2) {
            if (score.description === '1ST_HALF') {
              score.participant_id === participantId
                ? (firstHalfGoalsScored += score.score.goals)
                : (firstHalfGoalsConceded += score.score.goals);
            } else if (score.description === '2ND_HALF') {
              score.participant_id === participantId
                ? (secondHalfGoalsScored += score.score.goals)
                : (secondHalfGoalsConceded += score.score.goals);
            }
          }
        });

        // Subtract second and first half time goals to get the second half only
        if (matchDuration === 2) {
          acc.totalGoalsScored += secondHalfGoalsScored - firstHalfGoalsScored;
          acc.totalGoalsConceded +=
            secondHalfGoalsConceded - firstHalfGoalsConceded;
        }

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
          acc.totalWins++;
        } else if (!participant.meta.winner && opponent.meta.winner) {
          acc.totalLosts++;
        } else if (!participant.meta.winner && !opponent.meta.winner) {
          acc.totalDraws++;
        }
      }

      return acc;
    },
    {
      count: 0,
      totalGoalsScored: 0,
      totalGoalsConceded: 0,
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
    totalGoals: result.totalGoalsScored + result.totalGoalsConceded,
    averageGoals: (
      (result.totalGoalsScored + result.totalGoalsConceded) /
      result.count
    ).toFixed(4),
    averageGoalsScored: (result.totalGoalsScored / result.count).toFixed(4),
    averageGoalsConceded: (result.totalGoalsConceded / result.count).toFixed(4),
    averageCorners: (result.totalCorners / result.count).toFixed(4),
    averageYellowCards: (result.totalYellowCards / result.count).toFixed(4),
    averageRedCards: (result.totalRedCards / result.count).toFixed(4),
    averageWinRatio: ((result.totalWins / result.count) * 100).toFixed(2),
    averageLoseRatio: ((result.totalLosts / result.count) * 100).toFixed(2),
    averageDrawRatio: ((result.totalDraws / result.count) * 100).toFixed(2),
    averageExactNumGoals: (result.totalExactNumGoals / result.count).toFixed(4),
  };
};

/**
 * Helper function
 */
const getLeagueIdByName = leagueName => {
  const league = allLeagues.find(
    l => l.name.toLowerCase() === leagueName.toLowerCase()
  );
  return league ? league.id : null;
};

/**
 * Helper function
 */
const getSeasonIdByNameAndLeague = (seasonName, leagueId) => {
  const season = allSeasons.find(
    s =>
      s.name.toLowerCase() === seasonName.toLowerCase() &&
      s.league_id === leagueId
  );
  return season ? season.id : null;
};

/**
 * Helper function
 */
const getTeamIdByName = teamName => {
  const team = allTeams.find(
    t => t.name.toLowerCase() === teamName.toLowerCase()
  );
  return team ? team.id : null;
};

export { calc, getLeagueIdByName, getSeasonIdByNameAndLeague, getTeamIdByName };
