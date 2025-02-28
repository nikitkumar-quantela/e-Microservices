// MA Service Routes
import express from 'express';
import * as MaController from '../controllers/maController.js';

const router = express.Router();

router.get('/', MaController.getAll);
router.post('/', MaController.create);

export default router;
