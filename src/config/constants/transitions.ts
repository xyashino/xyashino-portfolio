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

export const SLIDE_RIGHT_TRANSITION = {
  enter: "transition-transform ease-in-out duration-700 lg:duration-900",
  enterFrom: "translate-x-full",
  enterTo: "translate-x-0",
  leave: "transition-transform ease-in-out duration-700 lg:duration-900",
  leaveFrom: "translate-x-0",
  leaveTo: "translate-x-full",
} as const;

export const OPACITY_TRANSITION = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0 scale-95",
  enterTo: "opacity-100 scale-100",
  leave: "ease-out duration-200",
  leaveFrom: "opacity-100 scale-100",
  leaveTo: "opacity-0 scale-95",
} as const;
