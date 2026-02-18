"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserWithPassword extends User {
  password?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Failed to parse stored user:", err);
        localStorage.removeItem("authUser");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Get all users from localStorage
      const usersJson = localStorage.getItem("authUsers");
      const users = usersJson ? JSON.parse(usersJson) : [];

      // Find user with matching email and password
      const foundUser = users.find(
        (u: UserWithPassword) => u.email === email && u.password === password
      );

      if (foundUser) {
        const userData = {
          id: foundUser.id,
          name: foundUser.name,
          email: foundUser.email,
        };
        setUser(userData);
        localStorage.setItem("authUser", JSON.stringify(userData));
        return true;
      }

      return false;
    } catch (err) {
      console.error("Login error:", err);
      return false;
    }
  };

  const signup = async (
    name: string,
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      // Get existing users
      const usersJson = localStorage.getItem("authUsers");
      const users: UserWithPassword[] = usersJson ? JSON.parse(usersJson) : [];

      // Check if email already exists
      if (users.some((u: UserWithPassword) => u.email === email)) {
        return false;
      }

      // Create new user
      const newUser: UserWithPassword = {
        id: `user_${Date.now()}`,
        name,
        email,
        password, // SECURITY WARNING: Plaintext storage. Use bcrypt/hashing in production.
      };

      users.push(newUser);
      localStorage.setItem("authUsers", JSON.stringify(users));

      // Auto-login after signup
      const userData = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      };
      setUser(userData);
      localStorage.setItem("authUser", JSON.stringify(userData));

      return true;
    } catch (err) {
      console.error("Signup error:", err);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
