"use client";
import { useRouter } from "next/navigation";

export default function useAnimatedRouter() {
  const router = useRouter();
  const viewTransitionsStatus = () => {
    const extendedDocument = document as ExtendedDocument;
    let message = "Opss, Your browser doesn't support View Transitions API";
    let isSupported = false;
    if (extendedDocument?.startViewTransition) {
      isSupported = true;
      message = "Yess, Your browser support View Transitions API";
    }
    return { message, isSupported };
  };
  const animatedRoute = (url: string) => {
    const extendedDocument = document as ExtendedDocument;
    if (!extendedDocument.startViewTransition) {
      return router.push(url);
    } else {
      extendedDocument.startViewTransition(() => {
        router.push(url);
      });
    }
  };
  return { animatedRoute, viewTransitionsStatus };
}
