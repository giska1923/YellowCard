import express from 'express';
import fixtures from './fixtures.js';
import leagues from './leagues.js';
import rounds from './rounds.js';
import seasons from './seasons.js';
import teams from './teams.js';
import calc from './calc.js';

const router = express.Router();

router.use('/fixtures', fixtures);
router.use('/leagues', leagues);
router.use('/rounds', rounds);
router.use('/seasons', seasons);
router.use('/teams', teams);
router.use('/calc', calc);

export default router;
