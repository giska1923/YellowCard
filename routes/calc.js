import express from 'express';
import { numGoals, averageGoals } from '../backtesting/goals.js';

const router = express.Router();

router.get('/', async (_, res) => {
  res.status(200).send({ msg: 'CALC Page' });
});

router.get('/numGoals', async (_, res) => {
  try {
    res.json(numGoals());
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: err.message });
  }
});

router.get(
  '/averageGoals/:leagueId?/:seasonId?/:participantId?',
  async (req, res) => {
    try {
      res.json(
        averageGoals(
          parseInt(req.params.leagueId || 271),
          parseInt(req.params.seasonId || 17328),
          parseInt(req.params.participantId || 1020)
        )
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ error: err.message });
    }
  }
);

export default router;
