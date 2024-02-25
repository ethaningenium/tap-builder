import { useEffect, useState } from "react";
import { z } from "zod";

const EmailSchema = z.string().email();
const PassSchema = z.string().min(8);
const NameSchema = z.string().min(3);

export function useRegister() {
  const [value, setValue] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [blurChecked, setBlurChecked] = useState({
    email: false,
    password: false,
    name: false,
  });

  useEffect(() => {
    if (blurChecked.email) {
      validateEmail();
    }
    if (blurChecked.password) {
      validatePass();
    }
    if (blurChecked.name) {
      validateName();
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

  function validateName() {
    const NameResult = NameSchema.safeParse(value.name);
    if (!NameResult.success) {
      setError((prev) => ({
        ...prev,
        name: NameResult.error.issues[0].message,
      }));
    } else {
      setError((prev) => ({
        ...prev,
        name: "",
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

  function handleNameBlur() {
    if (value.name === "") return;
    validateName();
    setBlurChecked((prev) => ({
      ...prev,
      name: true,
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

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.value;
    setValue((prev) => ({
      ...prev,
      name,
    }));
  }

  return [
    value,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
    handleEmailBlur,
    handlePassBlur,
    handleNameBlur,
  ] as const;
}
