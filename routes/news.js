import express from 'express';
import { newsController } from 'controllers';

const router = express.Router();

router.get('/', newsController.getNews);

router.get('/:id', newsController.getOneArticle);

export default router;
