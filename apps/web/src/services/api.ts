const API_BASE_URL = 'http://localhost:3001/api';

// Auth types
export interface User {
    id: number;
    email: string;
    name: string;
}

export interface AuthResponse {
    message: string;
    user: User;
    token: string;
}

// Product types
export interface Product {
    id: number;
    name: string;
    description: string | null;
    price: number;
    category: string;
    image: string | null;
}

export interface ProductsResponse {
    products: Product[];
    total: number;
}

// Contact types
export interface ContactData {
    name: string;
    email: string;
    message: string;
}

// Token management
export function getToken(): string | null {
    return localStorage.getItem('token');
}

export function setToken(token: string): void {
    localStorage.setItem('token', token);
}

export function removeToken(): void {
    localStorage.removeItem('token');
}

// API helper
async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const token = getToken();

    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
    }

    return data;
}

// Auth API
export const authAPI = {
    register: async (email: string, password: string, name: string): Promise<AuthResponse> => {
        const data = await fetchAPI<AuthResponse>('/auth/register', {
            method: 'POST',
            body: JSON.stringify({ email, password, name }),
        });
        setToken(data.token);
        return data;
    },

    login: async (email: string, password: string): Promise<AuthResponse> => {
        const data = await fetchAPI<AuthResponse>('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });
        setToken(data.token);
        return data;
    },

    me: async (): Promise<{ user: User }> => {
        return fetchAPI<{ user: User }>('/auth/me');
    },

    logout: (): void => {
        removeToken();
    },
};

// Products API
export const productsAPI = {
    getAll: async (category?: string): Promise<ProductsResponse> => {
        const query = category ? `?category=${encodeURIComponent(category)}` : '';
        return fetchAPI<ProductsResponse>(`/products${query}`);
    },

    getById: async (id: number): Promise<{ product: Product }> => {
        return fetchAPI<{ product: Product }>(`/products/${id}`);
    },
};

// Contact API
export const contactAPI = {
    submit: async (data: ContactData): Promise<{ message: string }> => {
        return fetchAPI<{ message: string }>('/contact', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },
};
