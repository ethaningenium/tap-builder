import { baseUrl } from ".";
import { Page } from "@/entities/pages";

export async function getAll(token: string) {
  const res = await fetch(`${baseUrl}/page`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const data: Page[] = await res.json();
  return data;
}

export async function getOne(id: string) {
  const res = await fetch(`${baseUrl}/page/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: Page = await res.json();
  return data;
}

export async function create(token: string, page: Page) {
  const res = await fetch(`${baseUrl}/page`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(page),
  });
  const data: Page = await res.json();
  return data;
}

export async function update(token: string, page: Page) {
  const res = await fetch(`${baseUrl}/page`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(page),
  });
  const data: Page = await res.json();
  return data;
}

export async function check(id: string) {
  const res = await fetch(`${baseUrl}/address/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: { exists: boolean } = await res.json();
  return data;
}
