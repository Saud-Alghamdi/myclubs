import { useState } from "react";
import app from "../firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { User, AuthProviderProps, AuthContextType } from "../types/customTypes";

// ----- Create Context ----- //
export const AuthContext = createContext<AuthContextType | null>(null);

// ----- Create Context Provider ----- //
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const auth = getAuth(app);

  async function login(email: string, password: string): Promise<boolean> {
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
        return true;
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
    return false;
  }

  return (
    <AuthContext.Provider value={{ user, error, login }}>
      {children}
    </AuthContext.Provider>
  );
}
