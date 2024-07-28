import express from 'express';
import appConfig from '../config.js';
import getAllPages from '../helpers/api.js';

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

export default router;
