import { z } from "zod";
import { baseUrl } from ".";
import { Page, PageMeta, PageUser } from "@/entities/pages";

const pageSchema = z.object({
  id: z.string(),
  title: z.string(),
  address: z.string(),
  theme: z.string(),
  favicon: z.string(),
  bricks: z.array(
    z.object({
      id: z.string(),
      type: z.string(),
      payload: z.string(),
      params: z.string(),
      children: z.array(z.string()),
    })
  ),
  user: z.string(),
});

const pageMetaSchema = pageSchema.omit({ bricks: true });

const pagesSchema = z.array(pageSchema);

export async function getAll(token: string) {
  const res = await fetch(`${baseUrl}/page`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    cache: "no-store",
  });
  const data: PageUser[] = await res.json();
  const pages = data ? data : [];
  return pagesSchema.parse(pages);
}

export async function getOne(id: string) {
  const res = await fetch(`${baseUrl}/page/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const data = await res.json();
  return pageSchema.parse(data);
}

export async function create(token: string, page: Page) {
  const res = await fetch(`${baseUrl}/page`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    cache: "no-store",
    body: JSON.stringify(page),
  });
  const data = await res.json();
  return pageSchema.parse(data);
}

export async function update(token: string, page: Page) {
  const res = await fetch(`${baseUrl}/page`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    cache: "no-store",
    body: JSON.stringify(page),
  });
  const data: Page = await res.json();
  return pageSchema.parse(data);
}

export async function updateMeta(token: string, page: PageMeta) {
  const res = await fetch(`${baseUrl}/page`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(page),
  });
  const data: Page = await res.json();
  return pageMetaSchema.parse(data);
}

const checkSchema = z.object({
  exists: z.boolean(),
});

export async function check(id: string) {
  const res = await fetch(`${baseUrl}/address/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return checkSchema.parse(data);
}

export async function remove(token: string, address: string) {
  const res = await fetch(`${baseUrl}/page/${address}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const data = await res.json();
  const success = z.object({
    message: z.enum(["deleted"]),
  });
  return success.parse(data);
}
