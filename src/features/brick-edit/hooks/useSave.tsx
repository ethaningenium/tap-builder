"use client";

import { useState } from "react";
import { useCurrentPage } from "../store/current-editing";
import { GetToken } from "@/shared/lib/token";
import { update } from "@/api/page";
import { useShouldSave } from "../store/should-save";

export function useSave() {
  const { bricks, page, setPage, setBricks } = useCurrentPage();
  const { shouldSave, setShouldSave } = useShouldSave();
  const [isSaving, setIsSaving] = useState(false);

  function BricksUpdated() {
    setShouldSave(true);
  }

  async function handleSave() {
    if (!shouldSave) return;
    setIsSaving(true);
    const token = GetToken();
    if (!token) throw new Error();
    const data = await update(token, {
      ...page,
      bricks,
    });
    setPage(data);
    setBricks(data.bricks);
    setIsSaving(false);
    setShouldSave(false);
  }

  return {
    shouldSave,
    isSaving,
    handleSave,
    BricksUpdated,
  };
}
