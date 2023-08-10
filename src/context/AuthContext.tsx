import { useState } from "react";
import app from "../firebase/firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { createContext } from "react";
import { User, AuthProviderProps, AuthContextType } from "../types/customTypes";

// ----- Create Context ----- //
export const AuthContext = createContext<AuthContextType | null>(null);

// ----- Context Provider ----- //
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const auth = getAuth(app);

  async function loginWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<boolean> {
    setError(null); // Reset error state at new login attempt

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
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
    return false;
  }

  async function signupWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<boolean> {
    setError(null); // Reset error state at new signup attempt

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (userCredential.user) {
        const signedupUserInfo = {
          email: userCredential.user.email,
        };
        setUser(signedupUserInfo);
        return true;
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
    return false;
  }

  async function loginWithGoogle(): Promise<boolean> {
    setError(null); // Reset error state at new login attempt

    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);

      if (userCredential.user) {
        const loggedInUserInfo = {
          username: userCredential.user.displayName,
          email: userCredential.user.email,
        };
        setUser(loggedInUserInfo);
        return true;
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
    return false;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        setError,
        loginWithEmailAndPassword,
        signupWithEmailAndPassword,
        loginWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}