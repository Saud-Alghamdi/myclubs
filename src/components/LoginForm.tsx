import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const authContext = useAuth();
  if (!authContext) {
    throw new Error("useAuth is used outside of the AuthProvider");
  }

  const { login, error, setError } = authContext;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (emailRef.current && passwordRef.current) {
      const isLoginSuccess = await login(
        emailRef.current.value,
        passwordRef.current.value,
      );
      if (isLoginSuccess) {
        navigate("/mymatches");
      }
    }
  };

  // Reset error when component mounts
  useEffect(() => {
    setError(null);
  }, [setError]);

  return (
    <div className="mx-auto mt-10 flex flex-col items-center justify-center px-6 py-8 lg:py-0">
      <a
        href="#"
        className="mb-6 flex items-center text-4xl font-semibold text-gray-900 dark:text-white"
      >
        Login
      </a>
      <div className="w-full rounded-lg border border-blue-500 shadow sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
                className="  block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
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
                className="  block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
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
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a href="#" className="  text-sm font-medium hover:underline">
                Forgot password?
              </a>
            </div>
            {error && <span style={{ color: "red" }}>{error}</span>}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
            >
              Login
            </button>
            <button className="mx-auto flex gap-2 rounded-lg border border-slate-200 px-4 py-2 text-slate-700 transition duration-150 hover:border-slate-400 hover:text-slate-900 hover:shadow">
              <img
                className="h-6 w-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span>Continue with Google</span>
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Dont have an account yet?{" "}
              <a href="/signup" className="font-medium hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
