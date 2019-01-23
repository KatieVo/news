import express from 'express';
import config from 'config/config';

import { newsRouter } from 'routes';
import { errorsController } from 'controllers';

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static(`${__dirname}/public`));

app.use('/news', newsRouter);

app.get('/', (req, res) => {
  res.render('home', { pageTitle: 'Home', path: '/' });
});

app.use(errorsController.getServerError);
app.use(errorsController.get404);


app.listen(config.port, () => {
  console.log(`server is running on port ${config.port}`);
});
