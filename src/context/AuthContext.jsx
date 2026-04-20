import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext();
const STORAGE_KEY = 'immo-auth';
const API_URL = import.meta.env.VITE_API_URL || '/api';

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ user: null, token: null });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setAuth(JSON.parse(stored));
      } catch (error) {
        console.error('Impossible de charger l’authentification', error);
      }
    }
  }, []);

  useEffect(() => {
    if (auth.user && auth.token) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(auth));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [auth]);

  const request = async (path, data) => {
    const response = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const payload = await response.json();
    if (!response.ok) {
      throw new Error(payload.message || 'Erreur serveur');
    }
    return payload;
  };

  const login = async ({ email, password }) => {
    if (!email || !password) {
      throw new Error('Email et mot de passe requis');
    }

    const result = await request('/auth/login', { email, password });
    setAuth({ user: result.user, token: result.token });
    return result;
  };

  const register = async ({ name, email, phone, password, role }) => {
    if (!name || !email || !phone || !password) {
      throw new Error('Veuillez remplir tous les champs');
    }
    const userRole = role === 'admin' ? 'admin' : role === 'agent' ? 'agent' : 'client';
    const result = await request('/auth/register', { name, email, phone, password, role: userRole });
    setAuth({ user: result.user, token: result.token });
    return result;
  };

  const logout = () => {
    setAuth({ user: null, token: null });
  };

  const value = useMemo(
    () => ({
      user: auth.user,
      token: auth.token,
      login,
      register,
      logout,
      isAuthenticated: Boolean(auth.token),
      isAdmin: auth.user?.role === 'admin',
    }),
    [auth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
