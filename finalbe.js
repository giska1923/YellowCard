/**
 * Goals
 *
 * We use hardcoded leagueId seasonId pairs:
 *    1. Superliga 2023/2024 (leagueId = 271, seasonId = 21644)
 *    2. Premiership 2023/2024 (leagueId = 501, seasonId = 21787)
 */
import allFixtures from './scripts/data/allFixtures.js';
import allSeasons from './scripts/data/allSeasons.js';
import allTeamsSeasons from './scripts/data/allTeamsSeasons.js';
import fs from 'fs';

const compare = (actual, target) => {
  return actual > target;
};

const getSeasonIds = () => {
  let year1 = 2018;
  let year2 = 2019;

  let loopSeasons = [];
  while (year2 < 2025) {
    const seasonName = `${year1}/${year2}`;
    const seasons = allSeasons
      .filter(
        season =>
          season.name === seasonName &&
          (season.league_id === 271 || season.league_id === 501)
      )
      .map(season => {
        return {
          name: season.name,
          season_id: season.id,
          league_id: season.league_id,
        };
      });
    loopSeasons = [...loopSeasons, ...seasons];

    year1++;
    year2++;
  }

  return loopSeasons;
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
                : (firstHalfGoalsConcededAway = score.score.goals);
            } else {
              score.participant_id === participantId
                ? (firstHalfGoalsScoredAway = score.score.goals)
                : (firstHalfGoalsConcededHome = score.score.goals);
            }
          } else if (score.description === '2ND_HALF') {
            // Handle second-half cumulative goals (end of match)
            if (score.score.participant === 'home') {
              if (score.participant_id === participantId) {
                totalGoalsHome = score.score.goals;
              } else {
                totalGoalsConcededAway = score.score.goals;
              }
            } else {
              if (score.participant_id === participantId) {
                totalGoalsAway = score.score.goals;
              } else {
                totalGoalsConcededHome = score.score.goals;
              }
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

        firstHalfGoalsScoredHome + firstHalfGoalsScoredAway >
        firstHalfGoalsConcededHome + firstHalfGoalsConcededAway
          ? acc.firstHalfWins++
          : firstHalfGoalsScoredHome + firstHalfGoalsScoredAway ===
            firstHalfGoalsConcededHome + firstHalfGoalsConcededAway
          ? acc.firstHalfDraws++
          : acc.firstHalfLosts++;
        secondHalfGoalsScoredHome + secondHalfGoalsScoredAway >
        secondHalfGoalsConcededHome + secondHalfGoalsConcededAway
          ? acc.secondHalfWins++
          : secondHalfGoalsScoredHome + secondHalfGoalsScoredAway ===
            secondHalfGoalsConcededHome + secondHalfGoalsConcededAway
          ? acc.secondHalfDraws++
          : acc.secondHalfLosts++;

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
          if (participant.meta.location === 'home') {
            acc.homeWins++;
          } else {
            acc.awayWins++;
          }
          acc.totalWins += 1;
        } else if (!participant.meta.winner && opponent.meta.winner) {
          if (participant.meta.location === 'home') {
            acc.homeLosts++;
          } else {
            acc.awayLosts++;
          }
          acc.totalLosts += 1;
        } else if (!participant.meta.winner && !opponent.meta.winner) {
          if (participant.meta.location === 'home') {
            acc.homeDraws++;
          } else {
            acc.awayDraws++;
          }
          acc.totalDraws += 1;
        }

        if (participant.meta.location === 'home') {
          acc.countHome += 1;
        } else {
          acc.countAway += 1;
        }

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
          location: participant.meta.location === 'home' ? 'home' : 'away',
        });
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
      firstHalfWins: 0,
      secondHalfWins: 0,
      homeWins: 0,
      awayWins: 0,
      totalLosts: 0,
      firstHalfLosts: 0,
      secondHalfLosts: 0,
      homeLosts: 0,
      awayLosts: 0,
      totalDraws: 0,
      firstHalfDraws: 0,
      secondHalfDraws: 0,
      homeDraws: 0,
      awayDraws: 0,
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
    points: result.totalWins * 3 + result.totalDraws,
    points1H: result.firstHalfWins * 3 + result.firstHalfDraws,
    points2H: result.secondHalfWins * 3 + result.secondHalfDraws,
    pointsHome: result.homeWins * 3 + result.homeDraws,
    pointsAway: result.awayWins * 3 + result.awayDraws,
    totalGoals:
      result.totalGoalsScoredHome +
      result.totalGoalsScoredAway +
      result.totalGoalsConcededHome +
      result.totalGoalsConcededAway,
    totalGoalsScored: result.totalGoalsScoredHome + result.totalGoalsScoredAway,
    totalGoalsConceded:
      result.totalGoalsConcededHome + result.totalGoalsConcededAway,
    goalDifference:
      result.totalGoalsScoredHome +
      result.totalGoalsScoredAway -
      (result.totalGoalsConcededHome + result.totalGoalsConcededAway),
    firstHalfGoalDifference:
      result.firstHalfGoalsScoredHome +
      result.firstHalfGoalsScoredAway -
      (result.firstHalfGoalsConcededHome + result.firstHalfGoalsConcededAway),
    secondHalfGoalDifference:
      result.secondHalfGoalsScoredHome +
      result.secondHalfGoalsScoredAway -
      (result.secondHalfGoalsConcededHome + result.secondHalfGoalsConcededAway),
    homeGoalDifference:
      result.totalGoalsScoredHome - result.totalGoalsConcededHome,
    awayGoalDifference:
      result.totalGoalsScoredAway - result.totalGoalsConcededAway,
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
    averageGoalsHome: parseFloat(
      (
        (result.totalGoalsScoredHome + result.totalGoalsConcededHome) /
        result.countHome
      ).toFixed(4)
    ),
    averageGoalsAway: parseFloat(
      (
        (result.totalGoalsScoredAway + result.totalGoalsConcededAway) /
        result.countAway
      ).toFixed(4)
    ),
    averageGoalsScoredHome: parseFloat(
      (result.totalGoalsScoredHome / result.countHome).toFixed(4)
    ),
    averageGoalsScoredAway: parseFloat(
      (result.totalGoalsScoredAway / result.countAway).toFixed(4)
    ),
    averageFirstHalfGoals: parseFloat(
      (
        (result.firstHalfGoalsScoredHome +
          result.firstHalfGoalsScoredAway +
          result.firstHalfGoalsConcededHome +
          result.firstHalfGoalsConcededAway) /
        result.count
      ).toFixed(4)
    ),
    averageSecondHalfGoals: parseFloat(
      (
        (result.secondHalfGoalsScoredHome +
          result.secondHalfGoalsScoredAway +
          result.secondHalfGoalsConcededHome +
          result.secondHalfGoalsConcededAway) /
        result.count
      ).toFixed(4)
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
    // averageCorners: parseFloat((result.totalCorners / result.count).toFixed(4)),
    // averageYellowCards: parseFloat(
    //   (result.totalYellowCards / result.count).toFixed(4)
    // ),
    // averageRedCards: parseFloat(
    //   (result.totalRedCards / result.count).toFixed(4)
    // ),
    // averageWinRatio: parseFloat(
    //   ((result.totalWins / result.count) * 100).toFixed(2)
    // ),
    // averageLoseRatio: parseFloat(
    //   ((result.totalLosts / result.count) * 100).toFixed(2)
    // ),
    // averageDrawRatio: parseFloat(
    //   ((result.totalDraws / result.count) * 100).toFixed(2)
    // ),
    // averageExactNumGoals: parseFloat(
    //   (result.totalExactNumGoals / result.count) * 100
    // ).toFixed(2),
  };
  return ret;
};

// Function for backtesting goals percentages
const calcPercentages = myTeamsGoals => {
  const teams = [];
  for (const teamStats of myTeamsGoals) {
    const team = {
      leagueId: teamStats.leagueId,
      seasonId: teamStats.seasonId,
      participantId: teamStats.participantId,
      seasonName: teamStats.seasonName,
      prcByCriteria: [],
    };
    for (const criteria of [0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5]) {
      let totalGoalsCount = 0;
      let totalScoredGoalsCount = 0;
      let totalConcededGoalsCount = 0;
      let total1HGoalsCount = 0;
      let total2HGoalsCount = 0;
      let totalHomeGoalsCount = 0;
      let totalAwayGoalsCount = 0;
      for (const fixture of teamStats.fixtures) {
        // Criteria 1: Percentage total number of goals
        if (
          compare(
            fixture.totalGoalsScored + fixture.totalGoalsConceded,
            criteria
          )
        ) {
          totalGoalsCount++;
        }
        // Criteria 2: Percentage total scored number of goals
        if (compare(fixture.totalGoalsScored, criteria)) {
          totalScoredGoalsCount++;
        }

        // Criteria 3: Percentage total conceded number of goals
        if (compare(fixture.totalGoalsConceded, criteria)) {
          totalConcededGoalsCount++;
        }

        // Criteria 4: Percentage 1H number of goals
        if (
          compare(
            fixture.firstHalfGoalsScored + fixture.firstHalfGoalsConceded,
            criteria
          )
        ) {
          total1HGoalsCount++;
        }

        // Criteria 5: Percentage 2H number of goals
        if (
          compare(
            fixture.secondHalfGoalsScored + fixture.secondHalfGoalsConceded,
            criteria
          )
        ) {
          total2HGoalsCount++;
        }

        // Criteria 6: Percentage home number of goals
        if (
          fixture.location === 'home' &&
          compare(
            fixture.totalGoalsScored + fixture.totalGoalsConceded,
            criteria
          )
        ) {
          totalHomeGoalsCount++;
        }

        // Criteria 6: Percentage away number of goals
        if (
          fixture.location === 'away' &&
          compare(
            fixture.totalGoalsScored + fixture.totalGoalsConceded,
            criteria
          )
        ) {
          totalAwayGoalsCount++;
        }
      }

      const prcGoals = (totalGoalsCount / teamStats.fixtures.length) * 100;
      const prcScored =
        (totalScoredGoalsCount / teamStats.fixtures.length) * 100;
      const prcConceded =
        (totalConcededGoalsCount / teamStats.fixtures.length) * 100;
      const prc1H = (total1HGoalsCount / teamStats.fixtures.length) * 100;
      const prc2H = (total2HGoalsCount / teamStats.fixtures.length) * 100;
      const prcHome = (totalHomeGoalsCount / teamStats.countHome) * 100;
      const prcAway = (totalAwayGoalsCount / teamStats.countAway) * 100;

      team.prcByCriteria.push({
        criteria,
        prcGoals,
        prcScored,
        prcConceded,
        prc1H,
        prc2H,
        prcHome,
        prcAway,
      });
    }
    teams.push(team);
  }

  return teams;
};

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
const calcTeamStats = (leagueId, seasonId, seasonName) => {
  const particantIds1 = getParticpantIds(leagueId, seasonId);
  const particantIds2 = getParticpantIds(leagueId, seasonId);
  let result = [];
  particantIds1.forEach(
    team =>
      (result = [...result, { ...calc(leagueId, seasonId, team), seasonName }])
  );
  particantIds2.forEach(
    team =>
      (result = [...result, { ...calc(leagueId, seasonId, team), seasonName }])
  );
  return result;
};

const loopFunc = () => {
  const seasons = [
    { name: '2018/2019', season_id: 12919, league_id: 271 },
    { name: '2018/2019', season_id: 12963, league_id: 501 },
    { name: '2019/2020', season_id: 16020, league_id: 271 },
    { name: '2019/2020', season_id: 16222, league_id: 501 },
    { name: '2020/2021', season_id: 17141, league_id: 501 },
    { name: '2020/2021', season_id: 17328, league_id: 271 },
    { name: '2021/2022', season_id: 18334, league_id: 271 },
    { name: '2021/2022', season_id: 18369, league_id: 501 },
    { name: '2022/2023', season_id: 19686, league_id: 271 },
    { name: '2022/2023', season_id: 19735, league_id: 501 },
    { name: '2023/2024', season_id: 21644, league_id: 271 },
    { name: '2023/2024', season_id: 21787, league_id: 501 },
  ];

  let result = [];
  seasons.forEach(season => {
    result = [
      ...result,
      ...calcTeamStats(season.league_id, season.season_id, season.name),
    ];
  });

  fs.writeFile('output.json', JSON.stringify(result), err => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File written successfully!');
    }
  });
};

const loopFuncPrc = () => {
  const prcResult = calcPercentages(allTeamsSeasons);

  fs.writeFile('output2.json', JSON.stringify(prcResult), err => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File written successfully!');
    }
  });
};
