import { Router } from 'express';
import * as commentController from '../controllers/commentController';

const router = Router();

router.get('/', commentController.getAllComments);
router.get('/:id', commentController.getCommentById);
router.put('/:id', commentController.updateCommentById);
router.delete('/:id', commentController.deleteCommentById);

export default router;
