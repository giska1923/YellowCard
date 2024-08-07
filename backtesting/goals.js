/** 
 * Number of Goals
 * 
 * League ID: 271
 * Season ID: 17328 
 * Season Name: 2020/2021
 * Team ID: 1020
 */
import allFixtures from '../data/allFixtures';


const numGoals = () => {
  const fixtures = JSON.stringify(allFixtures);
  const myFixtures = fixtures.filter(fixture => fixture.league_id === 271 && fixture.season_id === 17328);

  const participantIdToCount = 1020; // Replace with the ID you want to count goals for
  let totalGoals = 0;

  myFixtures.forEach(fixture => {
      fixture.scores.forEach(score => {
          // confirm that 2ND_HALF score equals result score
          if (score.participant_id === participantIdToCount && score.description === '2ND_HALF'){
              totalGoals += score.score.goals;
          }
      });
  });

  console.log(totalGoals)

  //   return myFixtures.reduce((sum, goal) => sum + goal, 0) ;
}

export default numGoals;