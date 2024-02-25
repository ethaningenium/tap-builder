import { useEffect, useState } from "react";
import { z } from "zod";

const EmailSchema = z.string().email();
const PassSchema = z.string().min(6);

export function useLogin() {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [blurChecked, setBlurChecked] = useState({
    email: false,
    password: false,
  });

  useEffect(() => {
    if (blurChecked.email) {
      validateEmail();
    }
    if (blurChecked.password) {
      validatePass();
    }
  }, [value]);

  function validateEmail() {
    const EmailResult = EmailSchema.safeParse(value.email);
    if (!EmailResult.success) {
      setError((prev) => ({
        ...prev,
        email: EmailResult.error.issues[0].message,
      }));
    } else {
      setError((prev) => ({
        ...prev,
        email: "",
      }));
    }
  }

  const validatePass = () => {
    const PassResult = PassSchema.safeParse(value.password);
    if (!PassResult.success) {
      setError((prev) => ({
        ...prev,
        password: PassResult.error.issues[0].message,
      }));
    } else {
      setError((prev) => ({
        ...prev,
        password: "",
      }));
    }
  };

  function handleEmailBlur() {
    if (value.email === "") return;
    validateEmail();
    setBlurChecked((prev) => ({
      ...prev,
      email: true,
    }));
  }

  function handlePassBlur() {
    if (value.password === "") return;
    validatePass();
    setBlurChecked((prev) => ({
      ...prev,
      password: true,
    }));
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const email = e.target.value;
    setValue((prev) => ({
      ...prev,
      email,
    }));
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const password = e.target.value;
    setValue((prev) => ({
      ...prev,
      password,
    }));
  }

  return [
    value,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleEmailBlur,
    handlePassBlur,
  ] as const;
}
