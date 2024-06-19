'use client';
import { useModalStore } from 'stores/modalStore';

export function useDialog() {
  const dialog = useModalStore(s => s);
  return dialog;
}
