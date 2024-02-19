import { Link, Navigate, useNavigate } from "react-router-dom";

import { RegisterFetcher } from "../service/fetching";
import { useUser } from "../service/useUser";
import { useRegisterInput } from "../service/useRegisterInput";
import { useMutation } from "react-query";
import { Loader } from "./loader";

export function Register() {
  const { setUser } = useUser();
  const mutation = useMutation(
    () => RegisterFetcher(value.name, value.email, value.password),
    {
      onSuccess: async (data) => {
        const body: {
          email: string;
          name: string;
          Authorization: string;
        } = await data.json();
        localStorage.setItem("Authorization", body.Authorization);
        setUser({
          email: body.email,
          name: body.name,
        });
        navigate("/");
      },
    }
  );
  const [
    value,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
    handleEmailBlur,
    handlePassBlur,
    handleNameBlur,
  ] = useRegisterInput();
  const navigate = useNavigate();

  async function handleRegister() {
    if (!value.email || !value.password || !value.name) return;
    mutation.mutate();
  }

  if (localStorage.getItem("Authorization")) {
    return <Navigate to="/" />;
  }

  return (
    <main className="w-full min-h-dvh bg-neutral-900 flex justify-center items-center">
      <div className="max-w-md w-full border border-neutral-700 p-6 flex flex-col items-start gap-4 rounded-xl py-16 mx-4">
        <div className="text-neutral-100 flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Welcome to Tap!</h1>
          <p className="text-neutral-400 font-light">
            Enter your name, email and password
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-zinc-100 font-light">Your name</label>
          <input
            type="text"
            className="p-2 pl-4 w-full rounded-lg border border-neutral-700 bg-transparent text-white focus:outline-none placeholder:text-neutral-600 placeholder:font-extralight"
            placeholder="Enter your name"
            onChange={handleNameChange}
            value={value.name}
            onBlur={handleNameBlur}
          />
          <div className="text-red-500 text-xs font-light">{error.name}</div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-zinc-100 font-light">Email</label>
          <input
            type="text"
            className="p-2 pl-4 w-full rounded-lg border border-neutral-700 bg-transparent text-white focus:outline-none placeholder:text-neutral-600 placeholder:font-extralight"
            placeholder="Enter your email"
            onChange={handleEmailChange}
            value={value.email}
            onBlur={handleEmailBlur}
          />
          <div className="text-red-500 text-xs font-light">{error.email}</div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-zinc-100 font-light">Password</label>
          <input
            type="text"
            className="p-2 pl-4 w-full rounded-lg border border-neutral-700 bg-transparent text-white focus:outline-none placeholder:text-neutral-600 placeholder:font-extralight"
            placeholder="Enter your email"
            onChange={handlePasswordChange}
            value={value.password}
            onBlur={handlePassBlur}
          />
          <div className="text-red-500 text-xs font-light">
            {error.password}
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 items-center">
          <button
            onClick={handleRegister}
            className="hover:bg-emerald-500 bg-emerald-600 flex justify-center items-center transition text-white py-2 w-full border border-emerald-400 rounded-lg disabled:bg-neutral-700 disabled:text-neutral-400 disabled:border-none disabled:hover:bg-neutral-700 disabled:cursor-not-allowed"
            disabled={
              error.email !== "" ||
              error.password !== "" ||
              error.name !== "" ||
              mutation.isLoading
            }
          >
            {mutation.isLoading ? <Loader /> : "Submit"}
          </button>
          <Link
            className="bg-neutral-600 text-white py-2 w-full border border-neutral-500 rounded-lg flex justify-center items-center"
            to="https://tap-backend-awiw.onrender.com/auth/google"
          >
            Signin with Google
          </Link>
        </div>

        <span className="flex w-full justify-center text-neutral-500 font-light">
          Already have an account?
          <Link to="/login" className="text-neutral-300 pl-2">
            Login
          </Link>
        </span>
      </div>
    </main>
  );
}