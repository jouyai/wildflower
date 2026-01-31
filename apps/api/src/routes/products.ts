import { Router, Request, Response } from 'express';
import { db, products } from '../db/index.js';
import { eq } from 'drizzle-orm';

const router = Router();

// GET /api/products
router.get('/', async (req: Request, res: Response) => {
    try {
        const categoryParam = req.query.category;
        const category: string | undefined = Array.isArray(categoryParam)
            ? categoryParam[0] as string
            : (categoryParam as string | undefined);

        let productList;
        if (category && typeof category === 'string') {
            productList = await db.select().from(products).where(eq(products.category, category));
        } else {
            productList = await db.select().from(products);
        }

        res.json({
            products: productList,
            total: productList.length,
        });
    } catch (error) {
        console.error('Get products error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET /api/products/:id
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string);

        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid product ID' });
        }

        const result = await db.select().from(products).where(eq(products.id, id));
        const product = result[0];

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json({ product });
    } catch (error) {
        console.error('Get product error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
