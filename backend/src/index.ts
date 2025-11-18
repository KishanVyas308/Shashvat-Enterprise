import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

// Importing routes
import authRoute from './routes/authRoute';
import productRoute from './routes/productRoute';
import requirementRoute from './routes/requirementRoute';
import reviewRoute from './routes/reviewRoute';
import multerRoute from './routes/multerRoute';
import categoriesRoute from './routes/categoriesRoute';
import visitorRoute from './routes/visitorRoute';
import setupSwagger from './swagger';

export const prisma = new PrismaClient();

const app = express();

// CORS Configuration
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:3000',
    'http://localhost:3001',
    'https://api.shashvatenterprise.com',
    'https://www.shashvatenterprise.com',
    'https://admin.shashvatenterprise.com'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-auth-token'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
const api = '/api/v1';

app.use(api + '/multer', multerRoute);
app.use(api + '/auth', authRoute);
app.use(api + '/products', productRoute);
app.use(api + '/requirements', requirementRoute);
app.use(api + '/reviews', reviewRoute);
app.use(api + '/categories', categoriesRoute);
app.use(api + '/visitors', visitorRoute);

// Setup Swagger
setupSwagger(app);
  
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});