// API Gateway with Proxying to Microservices
const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const corsOptions = require('./config/corsConfig');
const validateRequest = require('./middleware/validateRequest');
const routes = require('./routes');

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(validateRequest);
app.use('/', routes);

app.use('/ma', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/mc', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
app.use('/rv', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));

app.listen(3000, () => {
  console.log('API Gateway running on http://localhost:3000');
});
