const getServerError = (err, req, res, next) => {
  res.status(500);
  res.render('error', { error: err });
};
const get404 = (req, res) => {
  res.status(404);
  res.render('error', { error: 'Page not found' });
};

export default { getServerError, get404 };
