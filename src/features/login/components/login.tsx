import React, { useState } from "react";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let newErrors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      newErrors.email = "Email is needed.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Wrong format of email.";
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateEmail();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let newErrors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    setErrors(newErrors);
  };

  const emailChanging = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateEmail();
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    validateEmail();
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen bg-neutral-800">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-start text-3xl leading-none tracking-wide	font-medium text-white">
            Welcome back
          </h2>
          <p className="mt-2 text-start text-1xl font-extralight tracking-tight text-gray-400">
            Sign in to your account
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-extralight leading-6 text-gray-400"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={emailChanging}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                  className={`pl-3 block w-full font-extralight rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-neutral-700 ring-inset bg-neutral-800 placeholder:text-gray-600 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none ${
                    errors.email && !isFocused && "ring-2 ring-red-500"
                  }`}
                />
              </div>
              {errors.email && !isFocused && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-extralight leading-6 text-gray-400"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={`pl-3 block w-full font-medium rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-neutral-700 ring-inset bg-neutral-800 placeholder:text-gray-600 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none ${
                      errors.password && "border-red-500"
                    }`}
                  />
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-emerald-500 transition-colors duration-300 ease-in-out hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center w-full justify-center rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-neutral-600 ring-inset bg-neutral-700 transition-colors hover:bg-neutral-600 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
              >
                <span className="pl-3 font-medium">Sign in with Google</span>
              </button>
            </div>
          </form>

          <p className="mt-10 font-extralight text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <a
              href="#"
              className="underline leading-6 transition-colors text-white tracking-normal font-extralight hover:text-gray-400"
            >
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
