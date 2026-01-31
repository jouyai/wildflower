import { useEffect, useState } from 'react';
import { productsAPI, type Product } from '../services/api';

export function Catalogue() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categories = ['All Items', 'Bread', 'Pastry', 'Cookie', 'Dessert'];

    useEffect(() => {
        async function fetchProducts() {
            try {
                setLoading(true);
                const category = selectedCategory === 'All Items' ? undefined : selectedCategory || undefined;
                const response = await productsAPI.getAll(category);
                setProducts(response.products);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load products');
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [selectedCategory]);

    return (
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-24 py-12 space-y-12">
            {/* Page Heading */}
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl space-y-3">
                    <h1 className="text-slate-900 text-5xl font-black leading-tight tracking-[-0.033em] font-serif">Our Daily Bake</h1>
                    <p className="text-slate-500 text-lg font-normal leading-relaxed">
                        Small batches, big flavors. Handcrafted individual-sized treats delivered fresh from our ovens to your doorstep every morning.
                    </p>
                </div>
                <button className="flex h-12 px-6 items-center justify-center rounded-xl bg-primary text-white text-sm font-bold tracking-wide hover:brightness-110 transition-all">
                    <span>Subscribe to Daily Bake</span>
                </button>
            </section>

            {/* Chips / Filters */}
            <section className="flex flex-wrap items-center gap-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category === 'All Items' ? null : category)}
                        className={`flex h-10 items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors ${(category === 'All Items' && selectedCategory === null) || category === selectedCategory
                            ? 'bg-primary text-white shadow-sm'
                            : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </section>

            {/* Loading State */}
            {loading && (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="text-center py-20">
                    <p className="text-red-500 mb-4">{error}</p>
                    <button
                        onClick={() => setSelectedCategory(selectedCategory)}
                        className="text-primary font-semibold hover:underline"
                    >
                        Try again
                    </button>
                </div>
            )}

            {/* Product Grid */}
            {!loading && !error && (
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group flex flex-col gap-4">
                            <div className="relative overflow-hidden rounded-xl aspect-square bg-slate-200">
                                <div
                                    className="w-full h-full bg-center bg-no-repeat bg-cover transform transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url("${product.image || 'https://via.placeholder.com/400'}")` }}
                                ></div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-slate-900 font-serif text-lg font-bold">{product.name}</h3>
                                    <p className="text-primary font-bold">${product.price.toFixed(2)}</p>
                                </div>
                                <p className="text-slate-500 text-sm leading-normal">{product.description}</p>
                            </div>
                            <button className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg border-2 border-primary text-primary py-2 text-sm font-bold hover:bg-primary hover:text-white transition-all">
                                <span className="material-symbols-outlined text-sm">add</span> Add to Bag
                            </button>
                        </div>
                    ))}
                </section>
            )}

            {/* Empty State */}
            {!loading && !error && products.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-slate-500">No products found in this category.</p>
                </div>
            )}
        </div>
    );
}
