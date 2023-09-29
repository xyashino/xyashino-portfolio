"use client";
import { useState } from "react";

export const useDialog = (initial?: boolean) => {
  const [open, setOpen] = useState(initial || false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return { isOpen: open, handleOpen, handleClose };
};
