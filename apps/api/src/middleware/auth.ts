import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// JWT secret (in production, use environment variable)
export const JWT_SECRET = process.env.JWT_SECRET || 'wildflower-secret-key-2024';

// Extended Request type with user
export interface AuthRequest extends Request {
    user?: {
        id: number;
        email: string;
        name: string;
    };
}

// Auth middleware to verify JWT token
export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { id: number; email: string; name: string };
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
}
