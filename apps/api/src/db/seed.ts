import { db, products } from './index.js';

// Seed products for the catalogue
const seedProducts = [
    {
        name: 'Artisan Sourdough Loaf',
        description: 'A perfectly sized sourdough loaf, crafted for one. Crusty exterior, soft and tangy interior.',
        price: 8.50,
        category: 'Bread',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
    },
    {
        name: 'Classic Croissant',
        description: 'Buttery, flaky layers of perfection. Best enjoyed with morning coffee.',
        price: 4.25,
        category: 'Pastry',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400',
    },
    {
        name: 'Cinnamon Roll',
        description: 'Warm, gooey cinnamon roll with cream cheese frosting. Single serving.',
        price: 5.00,
        category: 'Pastry',
        image: 'https://images.unsplash.com/photo-1609127102567-8a9a21dc27d8?w=400',
    },
    {
        name: 'Almond Scone',
        description: 'Tender almond scone with a light glaze. Perfect with tea.',
        price: 3.75,
        category: 'Pastry',
        image: 'https://images.unsplash.com/photo-1558303919-f397d11e9127?w=400',
    },
    {
        name: 'Chocolate Chip Cookie',
        description: 'Large, chewy cookie loaded with premium chocolate chips.',
        price: 3.00,
        category: 'Cookie',
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400',
    },
    {
        name: 'Blueberry Muffin',
        description: 'Moist muffin bursting with fresh blueberries. Light and fluffy.',
        price: 4.00,
        category: 'Pastry',
        image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400',
    },
    {
        name: 'Mini Baguette',
        description: 'Personal-sized French baguette. Crispy crust, airy crumb.',
        price: 3.50,
        category: 'Bread',
        image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400',
    },
    {
        name: 'Lemon Tart',
        description: 'Zesty lemon curd in a buttery shell. Individual portion.',
        price: 6.00,
        category: 'Dessert',
        image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400',
    },
];

export async function seed() {
    console.log('🌱 Seeding database...');

    try {
        // Check if products already exist
        const existingProducts = await db.select().from(products).limit(1);
        if (existingProducts.length > 0) {
            console.log('✅ Database already seeded');
            return;
        }

        // Insert products
        for (const product of seedProducts) {
            await db.insert(products).values({
                ...product,
                createdAt: new Date().toISOString(),
            });
        }

        console.log('✅ Database seeded with', seedProducts.length, 'products');
    } catch (error) {
        console.error('Seed error:', error);
    }
}
