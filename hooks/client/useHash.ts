'use client';
import { useState, useEffect, useCallback } from 'react';
export const useHash = () => {
  const [hash, setHash] = useState(() =>
    typeof window !== 'undefined' ? window.location.hash : '#'
  );
  const hashChangeHandler = useCallback(() => {
    setHash(window.location.hash);
  }, []);
  useEffect(() => {
    window.addEventListener('hashchange', hashChangeHandler);
    return () => {
      window.removeEventListener('hashchange', hashChangeHandler);
    };
  }, []);

  const updateHash = useCallback(
    (newHash: string) => {
      if (newHash !== hash) window.location.hash = newHash;
    },
    [hash]
  );

  return { hash, updateHash };
};
