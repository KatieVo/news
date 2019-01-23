import { News } from 'models';

const getNews = (req, res) => {
  News.fetchAllNews().then(([news]) => {
    res.render('news', { news, pageTitle: 'News', path: '/news' });
  })
    .catch(err => console.log('EEEEEEERRRRRRROOOOOORRRR', err));
};

const getOneArticle = (req, res) => {
  // const article = news.find(item => item.id === req.params.id);
  const article = {};
  res.render('article', { pageTitle: article.title, article, path: '/news' });
};

export default { getNews, getOneArticle };
