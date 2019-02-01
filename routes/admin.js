import express from 'express';
import { newsController } from 'controllers';

const router = express.Router();

router.get('/add-article', newsController.getAddArticle);
router.post('/add-article', newsController.postAddArticle);

router.get('/news', newsController.getNews);

router.post('/delete-article', newsController.postDeleteArticle);

// router.get('/edit-article', newsController.getEditArticle);
// router.post('/edit-article', newsController.postEditArticle);

export default router;
