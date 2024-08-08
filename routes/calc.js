import express from 'express';
import { numGoals, averageGoals } from '../backtesting/goals.js';

const router = express.Router();

router.get('/', async (_, res) => {
  res.status(200).send({ msg: 'CALC Page' });
});

router.get('/numGoals/:leagueId?/:seasonId?/:participantId?', (_, res) => {
  const { leagueId, seasonId, participantId } = req.params;
  let result;
  if (leagueId && seasonId && participantId) {
    result = numGoals(
      parseInt(leagueId),
      parseInt(seasonId),
      parseInt(participantId)
    );
  } else {
    result = numGoals();
  }
  res.json(result);
});

router.get(
  '/averageGoals/:leagueId?/:seasonId?/:participantId?',
  (req, res) => {
    const { leagueId, seasonId, participantId } = req.params;
    let result;
    if (leagueId && seasonId && participantId) {
      result = averageGoals(
        parseInt(leagueId),
        parseInt(seasonId),
        parseInt(participantId)
      );
    } else {
      result = averageGoals();
    }
    res.json(result);
  }
);

export default router;
