import { useCallback, useSyncExternalStore } from "react";

/** Reactive media-query hook. */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback((onStoreChange: () => void) => {
    const mql = window.matchMedia(query);
    mql.addEventListener("change", onStoreChange);
    return () => mql.removeEventListener("change", onStoreChange);
  }, [query]);

  const getSnapshot = useCallback(
    () => (typeof window !== "undefined" ? window.matchMedia(query).matches : false),
    [query],
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

export const useIsMobile = () => useMediaQuery("(max-width: 768px)");
export const useFinePointer = () => useMediaQuery("(pointer: fine)");
