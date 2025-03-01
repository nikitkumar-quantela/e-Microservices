// Entry point for SOMA service
import express from 'express';
import cors from 'cors';
import somaRoutes from './routes/somaRoutes.js';
import corsOptions from '../config/corsConfig.js';

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use('/soma', somaRoutes);

export default app;
