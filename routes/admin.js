import express from 'express';
import { newsController } from 'controllers';

const router = express.Router();

router.get('/add-article', newsController.getAddArticle);
router.post('/add-article', newsController.postAddArticle);

export default router;
