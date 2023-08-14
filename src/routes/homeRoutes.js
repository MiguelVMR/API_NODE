import { Router } from 'express';

import HomeControler from '../controllers/HomeControler';

const router = new Router();
router.get('/', HomeControler.index);

export default router;
