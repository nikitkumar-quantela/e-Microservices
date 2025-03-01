// SOMA Service Routes
import express from 'express';
import * as SomaController from '../controllers/somaController.js';

const router = express.Router();

router.get('/', SomaController.getAll);
router.post('/', SomaController.create);

export default router;
