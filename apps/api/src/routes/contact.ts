import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { db, contacts } from '../db/index.js';

const router = Router();

// Validation schema
const contactSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

// POST /api/contact
router.post('/', async (req: Request, res: Response) => {
    try {
        // Validate input
        const { name, email, message } = contactSchema.parse(req.body);

        // Save contact submission
        const result = await db.insert(contacts).values({
            name,
            email,
            message,
            createdAt: new Date().toISOString(),
        }).returning();

        res.status(201).json({
            message: 'Thank you for your message. We will respond within 24 hours.',
            contact: { id: result[0].id },
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ error: error.errors[0].message });
        }
        console.error('Contact error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
