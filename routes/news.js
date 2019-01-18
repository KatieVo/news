import express from 'express';

import news from '../news.json';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('news', { news, pageTitle: 'News', path: '/news' });
});

router.get('/:id', (req, res) => {
  const article = news.find(item => item.id === req.params.id);
  res.render('article', { pageTitle: article.title, article, path: '/news' });
});

export default router;
