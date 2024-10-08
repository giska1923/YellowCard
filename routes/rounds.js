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
      `rounds/?api_token=${appConfig.API_TOKEN}&per_page=${appConfig.PER_PAGE}`
    );

    mapTypeIdsToNames(data);
    const flattenedArray = flattenNestedArray(data);
    res.json(flattenedArray);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: err.message });
  }
});

router.get('/page', async (_, res) => {
  try {
    const response = await api.get(
      `rounds/?api_token=${appConfig.API_TOKEN}&includes=fixtures.events&per_page=${appConfig.PER_PAGE}`
    );
    const data = response.data;

    res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: err.message });
  }
});

router.get('/fixtures/events', async (_, res) => {
  try {
    const data = await getAllPages(
      `rounds/?api_token=${appConfig.API_TOKEN}&includes=fixtures.events&per_page=${appConfig.PER_PAGE}`
    );

    mapTypeIdsToNames(data);
    res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: err.message });
  }
});

export default router;
