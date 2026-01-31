import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import productsRoutes from './routes/products.js';
import contactRoutes from './routes/contact.js';
import { initDb } from './db/index.js';
import { seed } from './db/seed.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    process.env.FRONTEND_URL,
].filter(Boolean) as string[];

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/contact', contactRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Initialize database and start server
async function start() {
    try {
        // Initialize database tables
        await initDb();

        // Seed database with initial products
        await seed();

        app.listen(PORT, () => {
            console.log(`🚀 Wildflower API running on http://localhost:${PORT}`);
            console.log(`📚 Endpoints:`);
            console.log(`   POST /api/auth/register`);
            console.log(`   POST /api/auth/login`);
            console.log(`   GET  /api/auth/me`);
            console.log(`   GET  /api/products`);
            console.log(`   POST /api/contact`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

start();
