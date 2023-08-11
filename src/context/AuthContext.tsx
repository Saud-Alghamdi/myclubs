import { useState, useEffect } from "react";
import app from "../firebase/firebase";
import {
  User,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext } from "react";
import { AuthProviderProps, AuthContextType } from "../types/customTypes";

// ----- Create Context ----- //
export const AuthContext = createContext<AuthContextType | null>(null);

// ----- Context Provider ----- //
export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

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
        setUser(userCredential.user);
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
        setUser(userCredential.user);
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

  // Add an effect to set the user state when the page loads
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // Clean up the subscription on unmount
    return unsubscribe;
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        error,
        setError,
        loginWithEmailAndPassword,
        signupWithEmailAndPassword,
        loginWithGoogle,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
