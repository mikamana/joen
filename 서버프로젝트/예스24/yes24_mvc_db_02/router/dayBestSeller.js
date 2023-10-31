import express from 'express';
import * as controller from '../controller/yes24Controller.js';


const router = express.Router();

router.get('/:page/:bsid', controller.getListPage);

export default router;