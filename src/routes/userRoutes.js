import { Router } from 'express';

import UserControler from '../controllers/UserControler';

const router = new Router();
router.post('/', UserControler.store);

export default router;
