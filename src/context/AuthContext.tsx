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
  signOut,
} from "firebase/auth";
import { createContext } from "react";
import { AuthProviderProps, AuthContextType } from "../types/customTypes";
import Spinner from "../components/shared/Spinner";

// ----- Create Context ----- //
export const AuthContext = createContext<AuthContextType | null>(null);

// ----- Context Provider ----- //
export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  async function loginWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<boolean> {
    setError(null); // Reset error state at new login attempt
    setLoading(true); // Set loading state to true at the start of the operation

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (userCredential.user) {
        setCurrentUser(userCredential.user);
        return true;
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
    return false;
  }

  async function signupWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<boolean> {
    setError(null); // Reset error state at new signup attempt
    setLoading(true); // Set loading state to true at the start of the operation

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (userCredential.user) {
        setCurrentUser(userCredential.user);
        return true;
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
    return false;
  }

  async function loginWithGoogle(): Promise<boolean> {
    setError(null); // Reset error state at new login attempt
    setLoading(true); // Set loading state to true at the start of the operation

    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);

      if (userCredential.user) {
        setCurrentUser(userCredential.user);
        return true;
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
    return false;
  }

  async function logout(): Promise<boolean> {
    setLoading(true); // Set loading state to true at the start of the operation
    try {
      await signOut(auth);
      return true;
    } catch (error) {
      console.error("Failed to sign out:", error);
      return false;
    } finally {
      setLoading(false);
    }
  }

  /*
  onAuthStateChanged() listens to firebase auth state changes in firebase's auth system, if a change happens, it runs a callback function that has a firebase user object as a parameter.
  This useEffect checks the user state on these conditions:
  1- on page refresh
  2- when navigating to another route
  3- when the auth state changes (a login happens, a signup happens, a logout happens)
  */
  useEffect(() => {
    const cleanup = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);

      setLoading(false);
    });

    // Clean up the subscription on unmount
    return cleanup;
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
        logout,
        loading,
      }}
    >
      {loading && <Spinner />}
      {children}
    </AuthContext.Provider>
  );
}
