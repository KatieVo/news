import { News } from 'models';

const getNews = (req, res, next) => {
  News.findAll()
    .then(news => {
      res.render('news', {
        news,
        pageTitle: 'News',
        path: req.baseUrl === '/admin' ? '/admin/news' : '/news',
      });
    })
    .catch(err => next(err));
};

const getOneArticle = async (req, res, next) => {
  News.findByPk(req.params.id)
    .then(article => res.render('article', {
      pageTitle: article.title,
      article,
      path: '/news',
    }))
    .catch(err => next(err));
};

const getAddArticle = (req, res) => {
  res.render('addArticle', { pageTitle: 'Add article', path: '/add-article' });
};

const postAddArticle = (req, res, next) => {
  const {
    title, author, description, content,
  } = req.body;
  News.create({
    title,
    author,
    description,
    content,
  })
    .then(() => res.redirect('/news'))
    .catch(err => next(err));
};

const postDeleteArticle = (req, res, next) => {
  News.findByPk(req.body.articleId)
    .then(article => {
      article.destroy();
      res.redirect('/admin/news');
    })
    .catch(err => next(err));
};

export default {
  getNews, getOneArticle, getAddArticle, postAddArticle, postDeleteArticle,
};
