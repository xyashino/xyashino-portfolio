import { describe, expect, expectTypeOf, test } from "vitest";
import { useDialog } from "@/lib/hooks/useDialog";
import { renderHook, act } from "@testing-library/react";

describe("useDialog hook:", () => {
  test("should be defined", () => {
    expect(useDialog).toBeDefined();
  });

  test("should return valid data", () => {
    const { result } = renderHook(useDialog);

    expectTypeOf(result.current.isOpen).toEqualTypeOf<boolean>();
    expectTypeOf(result.current.handleOpen).toEqualTypeOf<() => void>();
    expectTypeOf(result.current.handleClose).toEqualTypeOf<() => void>();
    expectTypeOf(result.current).toEqualTypeOf<ReturnType<typeof useDialog>>();
  });

  test("isOpen should be false when initial props didn't exist", () => {
    const { result } = renderHook(useDialog);
    expect(result.current.isOpen).toEqual(false);
  });

  test("should set isOpen value as provided initial data", () => {
    const { result, rerender } = renderHook(useDialog);
    expect(result.current.isOpen).toEqual(false);
    rerender(true);
    expect(result.current.isOpen).toEqual(false);
  });

  test("handleOpen should set isOpen to true", () => {
    const { result } = renderHook(() => useDialog());
    expect(result.current.isOpen).toEqual(false);

    act(() => {
      result.current.handleOpen();
    });

    expect(result.current.isOpen).toEqual(true);
  });

  test("handleClose should set isOpen to false", () => {
    const { result } = renderHook(() => useDialog(true));
    expect(result.current.isOpen).toEqual(true);

    act(() => {
      result.current.handleClose();
    });

    expect(result.current.isOpen).toEqual(false);
  });
});
