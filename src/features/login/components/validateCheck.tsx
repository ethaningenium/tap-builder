import { useState } from 'react';
import { z, ZodError } from 'zod';

const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const loginSchema = z.object({
    email: z.string().email({ message: 'Invalid email format' }).min(1, { message: 'Email is required' }),
    password: z.string().min(1, { message: 'Password is required' }),
  });

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let newErrors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      newErrors.email = 'Email is needed.';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Wrong format of email.';
    }

    setErrors(newErrors);
  };

  const setPasswordFromInput = (newPassword: string) => {
    setPassword(newPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      loginSchema.parse({ email, password });
      validateEmail();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      let newErrors: { email?: string; password?: string } = {};

      if (!email.trim()) {
        newErrors.email = 'Email is required.';
      } else if (!emailRegex.test(email)) {
        newErrors.email = 'Invalid email format.';
      }

      if (!password.trim()) {
        newErrors.password = 'Password is required.';
      }

      setErrors(newErrors);
    } catch (error) {
      if (error instanceof ZodError) {
        const newErrors = error.errors.reduce((acc, err) => {
          const path = err.path?.[0] as keyof typeof acc;
          if (path) {
            acc[path] = err.message;
          }
          return acc;
        }, {} as { [key: string]: string });
        setErrors(newErrors);
      }
    }
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

  return {
    email,
    password,
    isFocused,
    errors,
    handleSubmit,
    emailChanging,
    handleFocus,
    handleBlur,
    setPasswordFromInput,
  };
};

export default useLoginForm;
