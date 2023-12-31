import express from 'express';
import * as controller from '../controller/cartsController.js';

const router = express.Router();

// router.get('/:id', controller.getList);
router.get('/:id/:startIndex/:endIndex', controller.getPageList);
router.get('/:id/:cid', controller.removeCart);
router.put('/:id/:cid/:check', controller.updateQty);

export default router;