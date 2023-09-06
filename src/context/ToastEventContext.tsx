// This file should include all the events that need to render a toast as states

import { useState, createContext } from "react";
import {
  ToastProviderProps,
  ToastEventContextType,
} from "../types/customTypes";

// create context
export const ToastEventContext = createContext<ToastEventContextType | null>(
  null,
);

// context provider
export function ToastEventProvider({ children }: ToastProviderProps) {
  // Toast event states
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [isLogoutSuccessful, setIsLogoutSuccessful] = useState(false);
  

  return (
    <ToastEventContext.Provider
      value={{
        isSignupSuccessful,
        setIsSignupSuccessful,
        isLogoutSuccessful,
        setIsLogoutSuccessful,
        isLoginSuccessful,
        setIsLoginSuccessful
      }}
    >
      {children}
    </ToastEventContext.Provider>
  );
}
