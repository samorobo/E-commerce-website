// contexts/AuthContext.tsx
"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

type User = {
    id?: string;
    email?: string;
    // ...other user properties
  };

type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface IAuthProviderProps {
  children: ReactNode
}
export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};


// export function useAuth(){
//     const context = useContext(AuthContext);
//     if (context === undefined){
//         throw new Error('useAuth must be within a AuthProvider')
//     }}