"use client";
import { useState, useEffect, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

const LoginPrompt = () => {
  // Mock variable to simulate user login status
  const [loggedIn, setLoggedIn] = useState(false);
  const [visible, setVisible] = useState(true);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusedElementRef = useRef(null);

  useEffect(() => {
    // Show dialog if the user is not logged in
    if (!loggedIn) {
      setVisible(true);
      previousFocusedElementRef.current = document.activeElement;
      closeButtonRef.current.focus();
    }
  }, [loggedIn]);

  const handleClose = () => {
    setVisible(false);
    // Move focus back to the previously focused element when dialog closes
    if (previousFocusedElementRef.current) {
      previousFocusedElementRef.current.focus();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };

  useEffect(() => {
    if (visible) {
      const trapFocus = (event) => {
        if (!dialogRef.current.contains(event.target)) {
          closeButtonRef.current.focus();
        }
      };
      document.addEventListener("focusin", trapFocus);
      return () => document.removeEventListener("focusin", trapFocus);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="login-prompt-title"
      aria-live="assertive"
      aria-modal="true"
      className="w-full bg-white shadow-md py-3 px-4 flex items-center justify-center"
      onKeyDown={handleKeyDown}
      ref={dialogRef}
    >
      <p id="login-prompt-title" className="text-lg text-black">
        <span className="font-bold">Login</span> or{" "}
        <span className="font-bold">Register</span> for a more personalised
        shopping experience
      </p>
      <button
        onClick={handleClose}
        aria-label="Close login or register prompt"
        className="ml-4 text-black hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-50 flex items-center justify-center w-12 h-12"
        ref={closeButtonRef}
      >
        <XMarkIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default LoginPrompt;
