import { useEffect, useRef } from "react";

export const useFocusTrap = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const focusableElementsString =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    let focusableElements: HTMLElement[];

    function handleTabEvent(e: KeyboardEvent) {
      if (!containerRef.current) return;

      focusableElements = Array.from(
        containerRef.current.querySelectorAll(focusableElementsString),
      ) as HTMLElement[];

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!focusableElements.length) return;

      if (e.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }

    document.addEventListener("keydown", handleTabEvent);

    return () => {
      document.removeEventListener("keydown", handleTabEvent);
    };
  }, []);

  return containerRef;
};
