import { Router } from 'express';
import * as postController from '../controllers/postController';

const router = Router();

router.post('/', postController.createPost);
router.get('/', postController.getPosts);

export default router;
