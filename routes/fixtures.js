import express from 'express';
import api from '../api.js';
import appConfig from '../config.js';
import { getAllPages, mapTypeIdsToNames } from '../helpers/api.js';

const router = express.Router();

router.get('/', async (_, res) => {
  try {
    const data = await getAllPages(
      `fixtures/?api_token=${appConfig.API_TOKEN}&includes=round.statistics&per_page=${appConfig.PER_PAGE}`
    );

    res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: err.message });
  }
});

router.get('/statistics/page', async (_, res) => {
  try {
    const URL = `fixtures/?api_token=${appConfig.API_TOKEN}&includes=round.statistics&per_page=${appConfig.PER_PAGE}`;
    const response = await api.get(URL);
    const data = response.data;
    mapTypeIdsToNames(data);

    res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: err.message });
  }
});

/**
 * Fixtures including statistics
 */
router.get('/statistics', async (_, res) => {
  try {
    const data = await getAllPages(
      `fixtures/?api_token=${appConfig.API_TOKEN}&includes=statistics&per_page=${appConfig.PER_PAGE}`
    );

    mapTypeIdsToNames(data);
    res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: err.message });
  }
});

/**
 * Fixtures
 * Includes: statistics, events
 */
router.get('/statistics/events', async (_, res) => {
  try {
    const data = await getAllPages(
      `fixtures/?api_token=${appConfig.API_TOKEN}&includes=events;statistics&per_page=${appConfig.PER_PAGE}&page=2`
    );

    mapTypeIdsToNames(data);
    res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: err.message });
  }
});

/**
 * Seasons
 */
router.get('/seasons', async (_, res) => {
  try {
    const data = await getAllPages(
      `seasons/?api_token=${appConfig.API_TOKEN}&per_page=${appConfig.PER_PAGE}`
    );

    mapTypeIdsToNames(data);
    res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: err.message });
  }
});

export default router;
