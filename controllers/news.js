import { News } from 'models';

const getNews = (req, res, next) => {
  News.fetchAllNews().then(([news]) => {
    res.render('news', { news, pageTitle: 'News', path: '/news' });
  })
    .catch(err => next(err));
};

const getOneArticle = async (req, res, next) => {
  News.getArticleById(req.params.id)
    .then(([[article]]) => res.render('article', { pageTitle: article.title, article, path: '/news' }))
    .catch(err => next(err));
};

const getAddArticle = (req, res) => {
  res.render('addArticle', { pageTitle: 'Add article', path: '/add-article' });
};

const postAddArticle = (req, res) => {
  const {
    title, author, description, content,
  } = req.body;
  const article = new News(title, author, description, content);
  article.save().then(res.redirect('/news'));
};

export default {
  getNews, getOneArticle, getAddArticle, postAddArticle,
};
