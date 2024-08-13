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
import allTeams from './data/allTeams.js';
import allSeasons from './data/allSeasons.js';

// Function to calculate the average number of goals
const calc = (
  leagueId = 271,
  seasonId = 17328,
  participantId = 1020,
  matchDuration = 0, // 0 - whole, 1 - 1st half, 2 - 2nd half,
  average = false, // false - total number of goals, true - average goals
  goalsConceded = false, // false - goals scored, true - goals conceded
  ratio = 0, // 0 - don't evaluate, 1 - win ratio, 2 - lose ratio, 3 - draw ratio
  corners = 0, // 0 - don't evaluate, 1 - total number, 2 - average
  yellowCards = 0, // 0 - don't evaluate, 1 - total number, 2 - average
  redCards = 0, // 0 - don't evaluate, 1 - total number, 2 - average
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
        let firstHalfGoals = 0;
        let secondHalfGoals = 0;

        // Iterate through fixture scores array
        fixture.scores.forEach(score => {
          const isParticipantMatch = goalsConceded
            ? score.participant_id !== participantId
            : score.participant_id === participantId;

          if (isParticipantMatch) {
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
              acc.totalGoals += score.score.goals;
              acc.count += 1;
            } else if (
              matchDuration === 1 &&
              score.description === '1ST_HALF'
            ) {
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

        // Subtract second and first half time goals to get the second half only
        if (matchDuration === 2) {
          acc.totalGoals += secondHalfGoals - firstHalfGoals;
          acc.count += 1;
        }

        // Iterate through fixture statistics array
        if (corners !== 0 || yellowCards !== 0 || redCards !== 0) {
          fixture.statistics.forEach(statistic => {
            if (corners !== 0) {
              if (
                statistic.type_id === 'Corners' &&
                statistic.participant_id === participantId
              ) {
                acc.totalCorners += statistic.data.value;
              }
            }

            if (yellowCards !== 0) {
              if (
                statistic.type_id === 'Yellowcards' &&
                statistic.participant_id === participantId
              ) {
                acc.totalYellowCards += statistic.data.value;
              }
            }

            if (redCards !== 0) {
              if (
                statistic.type_id === 'Redcards' &&
                statistic.participant_id === participantId
              ) {
                acc.totalRedCards += statistic.data.value;
              }
            }
          });
        }

        // Fixture participants array
        if (ratio > 0) {
          const participant = fixture.participants.find(
            p => p.id === participantId
          );
          const opponent = fixture.participants.find(
            p => p.id !== participantId
          );

          if (ratio === 1 && participant.meta.winner) {
            acc.totalRatio++;
          } else if (
            ratio === 2 &&
            !participant.meta.winner &&
            opponent.meta.winner
          ) {
            acc.totalRatio++;
          } else if (
            ratio === 3 &&
            !participant.meta.winner &&
            !opponent.meta.winner
          ) {
            acc.totalRatio++;
          }
        }
      }

      return acc;
    },
    {
      count: 0,
      totalGoals: 0,
      totalCorners: 0,
      totalYellowCards: 0,
      totalRedCards: 0,
      totalRatio: 0,
      totalExactNumGoals: 0,
    }
  );

  // Return average or total based on the 'average' flag
  return average
    ? `Average number of goals: ${
        result.count > 0 ? (result.totalGoals / result.count).toFixed(4) : 0
      }`
    : `Total number of goals: ${result.totalGoals}`;
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

export { calc, getTeamIdByName, getSeasonIdByNameAndLeague };
