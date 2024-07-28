import express from 'express';
import cors from 'cors';
import api from './api.js';
import appConfig from './config.js';

const app = express();

app.use(cors(appConfig.corsOptions));
app.use(express.json());

/* API */
app.get('/', (_, res) => {
  res.send({ message: 'YELLOW CARD' });
});

app.get('/rounds', async (_, res) => {
  const response = await api.get(
    `rounds?api_token=${appConfig.API_TOKEN}&includes=fixtures.events&per_page=${appConfig.PER_PAGE}`
  );
  const data = response.data;

  res.json(data);
});

app.listen(appConfig.PORT, () => {
  console.log(`Server is running on port ${appConfig.PORT}`);
});
