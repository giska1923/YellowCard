import express from 'express';
import cors from 'cors';
import appConfig from './config.js';
import rounds from './routes/rounds.js';

const app = express();

app.use(cors(appConfig.corsOptions));
app.use(express.json());

/* API */
app.get('/', (_, res) => {
  res.send({ message: 'YELLOW CARD' });
});

app.use('/rounds', rounds);

app.listen(appConfig.PORT, () => {
  console.log(`Server is running on port ${appConfig.PORT}`);
});
