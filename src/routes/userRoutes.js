import { Router } from 'express';

import UserControler from '../controllers/UserControler';

const router = new Router();
router.post('/', UserControler.store);
router.get('/', UserControler.index);
router.get('/:id', UserControler.show);
router.put('/:id', UserControler.update);
router.delete('/:id', UserControler.delete);

export default router;
