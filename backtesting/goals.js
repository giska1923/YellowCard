/**
 * Number of Goals
 *
 * League ID: 271
 * Season ID: 17328
 * Season Name: 2020/2021
 * Team ID: 1020
 */
import allFixtures from '../data/allFixtures.js';

const numGoals = () => {
  const leagueId = 271;
  const seasonId = 17328;
  const participantIdToCount = 1020;

  // Filter the fixtures based on league_id and season_id
  const myFixtures = allFixtures.filter(
    fixture => fixture.league_id === leagueId && fixture.season_id === seasonId
  );

  // Use reduce to calculate the total goals
  return myFixtures.reduce((totalGoals, fixture) => {
    // Use reduce again to sum the goals for the specific participant and description
    return (
      totalGoals +
      fixture.scores.reduce((scoreTotal, score) => {
        if (
          score.participant_id === participantIdToCount &&
          score.description === '2ND_HALF'
        ) {
          return scoreTotal + score.score.goals;
        }
        return scoreTotal;
      }, 0)
    );
  }, 0);
};

const averageGoals = (leagueId, seasonId, participantId) => {
  // Filter the fixtures based on league_id and season_id
  const myFixtures = allFixtures.filter(
    fixture => fixture.league_id === leagueId && fixture.season_id === seasonId
  );

  // Use reduce to calculate the total goals and count the relevant scores
  const { totalGoals, count } = myFixtures.reduce(
    (acc, fixture) => {
      // Use reduce again to sum the goals for the specific participant and description
      fixture.scores.forEach(score => {
        if (
          score.participant_id === participantId &&
          score.description === '2ND_HALF'
        ) {
          acc.totalGoals += score.score.goals;
          acc.count += 1;
        }
      });
      return acc;
    },
    { totalGoals: 0, count: 0 }
  );

  // Calculate the average, taking care of division by zero
  const average = count > 0 ? totalGoals / count : 0;

  return `Ukupan broj utakmica u ligi ${leagueId} u sezoni ${seasonId} za tim ${participantId} je ${count}, ukupan broj golova je ${totalGoals}, a prosecan broj golova je ${average}`;
};

export { numGoals, averageGoals };
