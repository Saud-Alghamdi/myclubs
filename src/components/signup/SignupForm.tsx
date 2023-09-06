import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useToastEvent } from "../../hooks/useToastEvent";

export default function SignupForm() {
  const { setIsSignupSuccessful } = useToastEvent();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { signupWithEmailAndPassword, error, setError, loginWithGoogle } =
    useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (emailRef.current && passwordRef.current) {
      const isSignupSuccess = await signupWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value,
      );
      if (isSignupSuccess) {
        setIsSignupSuccessful(true);
        navigate("/");
      }
    }
  };

  const handleGoogleLogin = async () => {
    const isGoogleLoginSuccess = await loginWithGoogle();

    if (isGoogleLoginSuccess) {
      navigate("/");
    }
  };

  useEffect(() => {
    setError(null);
  }, [setError]);

  return (
    <form
      className="md:text-md mx-auto mt-10 max-w-[500px] space-y-6 rounded-2xl bg-slate-300 px-5 py-8 text-sm text-gray-900 "
      onSubmit={handleSubmit}
    >
      {error && (
        <span className="block font-semibold text-red-600">{error}</span>
      )}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full rounded-lg border-2 p-2.5 text-neutral-900 outline-none outline focus:border-blue-500 focus:ring-blue-500"
          placeholder="name@company.com"
          ref={emailRef}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="w-full rounded-lg border-2 p-2.5 text-neutral-900 outline-none outline focus:border-blue-500 focus:ring-blue-500"
          ref={passwordRef}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-3 text-center  font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Sign up
      </button>
      <button
        className="inline w-full rounded-lg bg-slate-100 px-5 py-3 text-center  font-medium text-gray-900 hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
        onClick={handleGoogleLogin}
        type="button"
      >
        <img
          className="inline h-6 w-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span className="ml-2">Continue with Google</span>
      </button>
      <p className="text-sm font-light text-gray-500">
        Already have an account?{" "}
        <Link to="/login" className="font-medium text-gray-700 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}
