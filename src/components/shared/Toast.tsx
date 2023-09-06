import { ToastProps } from "../../types/customTypes";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseSymbol from "../svg/CloseSymbol";

export default function Toast({ message, isSuccessToastType }: ToastProps) {
  // This state controlls the close "X" button
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // Close Toast automatically after 4 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, []);

  // If toast is not visible, don't render anything
  if (!isVisible) return null;

  // Defining motion variants
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const colorScheme = isSuccessToastType
    ? {
        border: "border-green-200",
        bg: "bg-green-100",
        text: "text-green-500",
        button: "text-green-400",
        hover: "hover:text-green-600",
        ring: "focus:ring-green-400",
        offsetRing: "focus:ring-offset-green-100",
      }
    : {
        border: "border-red-200",
        bg: "bg-red-100",
        text: "text-red-500",
        button: "text-red-400",
        hover: "hover:text-red-600",
        ring: "focus:ring-red-400",
        offsetRing: "focus:ring-offset-red-100",
      };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          className="fixed inset-0 z-50 mt-16 flex items-start justify-center"
        >
          <div
            className={`max-w-sm rounded-md ${colorScheme.border} ${colorScheme.bg} text-sm ${colorScheme.text} shadow-md`}
            role="alert"
          >
            <div className="flex p-4">
              {message}
              <div className="ml-auto">
                <button
                  type="button"
                  className={`inline-flex h-4 w-8 flex-shrink-0 items-center justify-center rounded-md text-sm ${colorScheme.button} transition-all ${colorScheme.hover} focus:outline-none focus:ring-2 ${colorScheme.ring} focus:ring-offset-2 ${colorScheme.offsetRing}`}
                  onClick={() => setIsVisible(false)}
                >
                  <span className="sr-only">Close</span>
                  <CloseSymbol />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
