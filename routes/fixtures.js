import express from 'express';
import api from '../api.js';
import appConfig from '../config.js';
import {
  getAllPages,
  mapTypeIdsToNames,
  flattenNestedArray,
} from '../helpers/api.js';

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
 * Includes: statistics, events, scores, participants
 */
router.get('/statistics/events/scores/participants', async (_, res) => {
  try {
    const data = await getAllPages(
      `fixtures/?api_token=${appConfig.API_TOKEN}&includes=events;statistics;scores;participants&per_page=${appConfig.PER_PAGE}&page=2`
    );

    mapTypeIdsToNames(data);
    const flattenedArray = flattenNestedArray(data);
    res.json(flattenedArray);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: err.message });
  }
});

export default router;
