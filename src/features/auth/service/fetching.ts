export function LoginFetcher(email: string, password: string) {
  return fetch("https://tap-backend-awiw.onrender.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
}

export function RegisterFetcher(name: string, email: string, password: string) {
  console.log(email, name, password);
  return fetch("https://tap-backend-awiw.onrender.com/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, name: name, password: password }),
  });
}

export function GetMe(token: string) {
  return fetch("https://tap-backend-awiw.onrender.com/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
}
