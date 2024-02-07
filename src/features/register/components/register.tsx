import React from "react";
import useLoginForm from '../../login/components/validateCheck';
import zxcvbn from 'zxcvbn';

export const Register: React.FC = () => {
  const { email, password, isFocused, errors, handleSubmit, emailChanging, handleFocus, handleBlur, setPasswordFromInput } = useLoginForm();
  const getPasswordStrength = () => {
    const result = zxcvbn(password);
    return result.score; 
  };

  const getStrengthMessage = () => {
    const score = getPasswordStrength();
    switch (score) {
      case 0:
      case 1:
        return "Weeak pass. Try adding uppercase letters, numbers, and special characters.";
      case 2:
        return "Change password. Consider adding more complexity for better security.";
      case 3:
        return "Good password. You can still enhance it by adding more variety.";
      case 4:
        return "Strong password. Great job!";
      default:
        return "";
    }
  };

  const getPasswordStrengthColor = () => {
    const score = getPasswordStrength();
    switch (score) {
      case 0:
      case 1:
        return { color: "#FF0000" }; 
      case 2:
        return { color: "#FFA500" }; 
      case 3:
        return { color: "#008000" }; 
      case 4:
        return { color: "#008000" }; 
      default:
        return {};
    }
  };

  const isPasswordFocused = () => {
    // Implement a function to check if the password input is currently focused
    // You can use the state or refs to track the focus status
    // Example: Replace this with your actual implementation
    return true; 
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen bg-primary-maindark">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-start text-3xl leading-none tracking-wide	font-medium text-primary-white">
            Get started
          </h2>
          <p className="mt-2 text-start text-1xl font-extralight tracking-tight text-text-backColor">
            Create a new account
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
                className="block text-sm font-extralight leading-6 text-text-backColor"
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
                  className={`pl-3 block w-full font-extralight rounded-md border-0 py-1.5 text-primary-white shadow-sm ring-1 ring-neutral-700 ring-inset bg-neutral-800 placeholder:text-gray-600 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none ${
                    errors.email && !isFocused && "ring-2 ring-primary-danger"
                  }`}
                />
              </div>
              {errors.email && !isFocused && (
                <p className="mt-1 text-sm text-primary-danger">{errors.email}</p>
              )}
            </div>

            <div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-extralight leading-6 text-text-backColor"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPasswordFromInput(e.target.value)}
                    required
                    className={`pl-3 block w-full font-medium rounded-md border-0 py-1.5 text-primary-white shadow-sm ring-1 ring-neutral-700 ring-inset bg-neutral-800 placeholder:text-gray-600 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none ${
                      errors.password && "border-primary-danger"
                    }`}
                  />
                </div>
                {isPasswordFocused() && (
                  <div>
                    <p className="mt-1 text-sm" style={getPasswordStrengthColor()}>
                      Password Strength: {getPasswordStrength()}
                    </p>
                    <p className="mt-1 text-sm" style={getPasswordStrengthColor()}>
                      {getStrengthMessage()}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-primary-white shadow-sm bg-primary-primary transition-colors duration-300 ease-in-out hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center w-full justify-center rounded-md border-0 py-1.5 text-primary-white shadow-sm ring-1 ring-neutral-600 ring-inset bg-neutral-700 transition-colors hover:bg-neutral-600 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
              >
                <span className="pl-3 font-medium">Sign Up with Google</span>
              </button>
            </div>
          </form>

          <p className="mt-10 font-extralight text-center text-sm text-text-backColor">
            Already have an account?{" "}
            <a
              href="#"
              className="underline leading-6 transition-colors text-primary-white tracking-normal font-extralight hover:text-gray-400"
            >
              Sign in! 
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
