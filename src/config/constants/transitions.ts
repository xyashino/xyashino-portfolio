export const MODAL_BACKGROUND_TRANSITION = {
  enter: "ease-out duration-300 transition-transform",
  enterFrom: "translate-x-full",
  enterTo: "translate-x-0",
  leave: "ease-in duration-300",
  leaveFrom: "translate-x-0",
  leaveTo: "translate-x-full",
} as const;
export const MODAL_CONTENT_TRANSITION = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0 scale-95",
  enterTo: "opacity-100 scale-100",
  leave: "ease-in duration-200",
  leaveFrom: "opacity-100 scale-100",
  leaveTo: "opacity-0 scale-20",
} as const;
