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
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);

  return (
    <ToastEventContext.Provider
      value={{ isSignupSuccessful, setIsSignupSuccessful }}
    >
      {children}
    </ToastEventContext.Provider>
  );
}
