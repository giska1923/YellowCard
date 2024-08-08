import express from 'express';
import cors from 'cors';
import appConfig from './config.js';
import internal from './routes/index.js';

const app = express();

// Page rendering
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cors(appConfig.corsOptions));
app.use(express.json());

// API Routes
app.get('/', (_, res) => {
  // Render the 'index.ejs' template
  res.status(200).render('index', { message: 'YELLOW CARD' });
});

app.use('/internal', internal);

app.listen(appConfig.PORT, () => {
  console.log(`Server is running on port ${appConfig.PORT}`);
});
