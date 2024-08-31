import express from 'express';
import path from 'path';
import cors from 'cors';
import appConfig from './config.js';
import internal from './routes/index.js';

const app = express();

// Page rendering
app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(cors(appConfig.corsOptions));
app.use(express.json());

// Serve static files from the directories
app.use(express.static(path.resolve('scripts')));
app.use(express.static(path.resolve('public')));

// API Routes

// Internal Routes
app.use('/internal', internal);

// View Routes
app.get('/', (_, res) => {
  res.status(200).render('home', { message: 'YELLOW CARD' });
});

app.get('/goals', (_, res) => {
  res.status(200).render('goals');
});

app.get('/corners', (_, res) => {
  res.status(200).render('corners');
});

app.get('*', (_, res) => {
  res.redirect('/');
});

// Server Start
app.listen(appConfig.PORT, () => {
  console.log(`Server is running on port ${appConfig.PORT}`);
});
