import express from 'express';
import { calc } from '../scripts/goals.js';

const router = express.Router();

router.get('/', async (_, res) => {
  res.status(200).send({ msg: 'CALC Page' });
});

router.get(
  '/averageGoals/:leagueId?/:seasonId?/:participantId?',
  (req, res) => {
    const { leagueId, seasonId, participantId } = req.params;
    let result;
    if (leagueId && seasonId && participantId) {
      result = calc(
        parseInt(leagueId),
        parseInt(seasonId),
        parseInt(participantId)
      );
    } else {
      result = calc();
    }
    res.json(result);
  }
);

export default router;
