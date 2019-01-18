import express from 'express';
import { newsRouter } from 'routes';


import config from 'config/config';

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static(`${__dirname}/public`));

app.use('/news', newsRouter);

app.get('/', (req, res) => {
  res.render('home', { pageTitle: 'Home', path: '/' });
});


app.listen(config.port, () => {
  console.log(`server is running on port ${config.port}`);
});
