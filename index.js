import express from 'express';
import cors from 'cors';
import appConfig from './config.js';
import { fixtures, leagues, rounds, seasons, teams, calc } from './routes/index.js';

const app = express();

app.use(cors(appConfig.corsOptions));
app.use(express.json());

/* API */
app.get('/', (_, res) => {
  res.send({ message: 'YELLOW CARD' });
});

app.use('/fixtures', fixtures);
app.use('/leagues', leagues);
app.use('/rounds', rounds);
app.use('/seasons', seasons);
app.use('/teams', teams);
app.use('/calc', calc);

app.listen(appConfig.PORT, () => {
  console.log(`Server is running on port ${appConfig.PORT}`);
});
