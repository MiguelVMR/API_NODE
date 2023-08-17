import { Router } from 'express';

import UserControler from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();
router.get('/', UserControler.index);
router.get('/:id', UserControler.show);

router.post('/', UserControler.store);
router.put('/', loginRequired, UserControler.update);
router.delete('/', loginRequired, UserControler.delete);

export default router;
