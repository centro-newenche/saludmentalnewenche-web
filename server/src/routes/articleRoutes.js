import { Router } from 'express';
import * as ArticleController from '../controllers/articleController.js';
import { verifyAdmin } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/', ArticleController.listPublished);
router.get('/:slug', ArticleController.getBySlug);

router.get('/admin/all', verifyAdmin, ArticleController.listAll);
router.get('/admin/:id', verifyAdmin, ArticleController.getById);
router.post('/', verifyAdmin, ArticleController.create);
router.put('/:id', verifyAdmin, ArticleController.update);
router.delete('/:id', verifyAdmin, ArticleController.remove);

export default router;