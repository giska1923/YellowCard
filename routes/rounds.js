import express from 'express';
import api from '../api.js';
import appConfig from '../config.js';

const router = express.Router();

router.get('/', async (_, res) => {
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

router.get('/all', async (_, res) => {
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

export default router;
