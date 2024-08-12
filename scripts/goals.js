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
const calc = (
  leagueId = 271,
  seasonId = 17328,
  participantId = 1020,
  matchDuration = 0, // 0 - whole, 1 - 1st half, 2 - 2nd half,
  average = false,
  goalsConceded = false
) => {
  // Filter the fixtures based on league_id and season_id
  const myFixtures = allFixtures.filter(
    fixture => fixture.league_id === leagueId && fixture.season_id === seasonId
  );

  // Calculate the total goals
  const { totalGoals, count } = myFixtures.reduce(
    (acc, fixture) => {
      let firstHalfGoals = 0;
      let secondHalfGoals = 0;

      fixture.scores.forEach(score => {
        const isParticipantMatch = goalsConceded
          ? score.participant_id !== participantId
          : score.participant_id === participantId;

        if (isParticipantMatch) {
          if (matchDuration === 0 && score.description === '2ND_HALF') {
            acc.totalGoals += score.score.goals;
            acc.count += 1;
          } else if (matchDuration === 1 && score.description === '1ST_HALF') {
            acc.totalGoals += score.score.goals;
            acc.count += 1;
          } else if (matchDuration === 2) {
            if (score.description === '1ST_HALF') {
              firstHalfGoals += score.score.goals;
            } else if (score.description === '2ND_HALF') {
              secondHalfGoals += score.score.goals;
            }
          }
        }
      });

      if (matchDuration === 2) {
        acc.totalGoals += secondHalfGoals - firstHalfGoals;
        acc.count += 1;
      }

      return acc;
    },
    { totalGoals: 0, count: 0 }
  );

  // Return average or total based on the 'average' flag
  return average
    ? `Average number of goals: ${
        count > 0 ? (totalGoals / count).toFixed(4) : 0
      }`
    : `Total number of goals: ${totalGoals}`;
};

export default calc;
