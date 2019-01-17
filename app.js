import express from 'express';
import config from 'config/config';

import news from './news.json';

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static(`${__dirname}/public`));


app.get('/', (req, res) => {
  res.render('home', { pageTitle: 'Home' });
});

app.get('/news', (req, res) => {
  res.render('news', { news, pageTitle: 'News' });
});

app.get('/news/:id', (req, res) => {
  const article = news.find(item => item.id === req.params.id);
  res.render('article', { pageTitle: article.title, article });
});


app.listen(config.port, () => {
  console.log(`server is running on port ${config.port}`);
});
