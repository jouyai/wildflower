import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { authAPI, getToken, removeToken } from '../services/api';
import type { User } from '../services/api';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, name: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // Check for existing token on mount
    useEffect(() => {
        async function checkAuth() {
            const token = getToken();
            if (token) {
                try {
                    const response = await authAPI.me();
                    setUser(response.user);
                } catch {
                    removeToken();
                }
            }
            setLoading(false);
        }
        checkAuth();
    }, []);

    const login = async (email: string, password: string) => {
        const response = await authAPI.login(email, password);
        setUser(response.user);
    };

    const register = async (email: string, password: string, name: string) => {
        const response = await authAPI.register(email, password, name);
        setUser(response.user);
    };

    const logout = () => {
        authAPI.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
