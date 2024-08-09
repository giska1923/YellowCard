/**
 * Goals
 *
 * Default values:
 * League ID: 271
 * Season ID: 17328
 * Season Name: "2020/2021"
 * Team ID: 1020
 */
import allFixtures from './data/allFixtures.js';

// Function to calculate the average number of goals
const averageGoals = (
  leagueId = 271,
  seasonId = 17328,
  participantId = 1020
) => {
  // Filter the fixtures based on league_id and season_id
  const myFixtures = allFixtures.filter(
    fixture => fixture.league_id === leagueId && fixture.season_id === seasonId
  );

  // Calculate the total goals
  const { totalGoals, count } = myFixtures.reduce(
    (acc, fixture) => {
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

  if (!count) return 0;
  const result = totalGoals / count;

  return result.toFixed(4);
};

export default averageGoals;
