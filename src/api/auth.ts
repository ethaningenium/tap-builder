import { baseUrl } from ".";

type meResponse = {
  email: string;
  name: string;
};

type authResponse = meResponse & {
  Authorization: string;
};

export async function login(email: string, password: string) {
  const res = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data: authResponse = await res.json();
  return data;
}

export async function register(name: string, email: string, password: string) {
  const res = await fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, name: name, password: password }),
  });
  const data: authResponse = await res.json();
  return data;
}

export async function me(token: string) {
  console.log(baseUrl);
  const res = await fetch(`${baseUrl}/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const data: meResponse = await res.json();
  return data;
}
