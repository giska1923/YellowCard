import express from 'express';
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
      `seasons/?api_token=${appConfig.API_TOKEN}&per_page=${appConfig.PER_PAGE}`
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
