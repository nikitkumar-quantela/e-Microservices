// Entry point for MA service
import express from 'express';
import cors from 'cors';
import maRoutes from './routes/maRoutes.js';
import corsOptions from '../config/corsConfig.js';

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use('/ma', maRoutes);

app.listen(3001, () => {
  console.log('MA Service running on http://localhost:3001');
});
