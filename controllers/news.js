import news from '../news.json';

const getNews = (req, res) => {
  res.render('news', { news, pageTitle: 'News', path: '/news' });
};
const getOneArticle = (req, res) => {
  const article = news.find(item => item.id === req.params.id);
  res.render('article', { pageTitle: article.title, article, path: '/news' });
};

export default { getNews, getOneArticle };
