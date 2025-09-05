"use client";

import { useState } from "react";

let _authOpen = false;
const _listeners: ((value: boolean) => void)[] = [];

export function useOpenModal() {
  const [authOpen, setAuthOpenState] = useState(_authOpen);

  const setAuthOpen = (value: boolean) => {
    _authOpen = value;
    _listeners.forEach((l) => l(_authOpen));
  };

  // sync local state with global
  if (!_listeners.includes(setAuthOpenState)) {
    _listeners.push(setAuthOpenState);
  }

  return { authOpen, setAuthOpen };
}
