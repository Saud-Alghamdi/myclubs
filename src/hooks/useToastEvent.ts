import { useContext } from "react";
import { ToastEventContext } from "../context/ToastEventContext";

export const useToastEvent = () => {
  const context = useContext(ToastEventContext);

  if (context === null) {
    throw new Error("useToastContext must be used within an ToastContextProvider");
  }

  return context;
};
