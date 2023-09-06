import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const authContext = useAuth();
  const navigate = useNavigate();

  const { loginWithEmailAndPassword, loginWithGoogle, error, setError } =
    authContext;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (emailRef.current && passwordRef.current) {
      const isLoginSuccess = await loginWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value,
      );
      if (isLoginSuccess) {
        toast.success("Sign up successful");
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
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="focus:ring-3   h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
            />
          </div>
          <div className="ml-2 text-sm">
            <label
              htmlFor="remember"
              className="text-gray-500 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
        </div>
        <a
          href="#"
          className="  text-sm font-medium text-gray-700 hover:underline"
        >
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-3 text-center  font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Login
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
        Dont have an account yet?{" "}
        <Link
          to="/signup"
          className="font-medium text-gray-700 hover:underline"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}
