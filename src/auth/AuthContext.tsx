import React, { useState } from "react";
import app from "../firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";

// ----- Create Context ----- //

type User = {
  username: string | null;
  email: string | null;
};

type AuthContextType = {
  user: User | null;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

// ----- Create Context Provider ----- //

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const auth = getAuth(app);

  async function login(email: string, password: string) {
    // Reset error state at the beginning of a new login attempt
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (userCredential.user) {
        const loggedInUserInfo = {
          username: userCredential.user.displayName,
          email: userCredential.user.email,
        };
        setUser(loggedInUserInfo);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  }

  return (
    <AuthContext.Provider value={{ user, error, login }}>
      {children}
    </AuthContext.Provider>
  );
}
