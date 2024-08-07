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

export default numGoals;
