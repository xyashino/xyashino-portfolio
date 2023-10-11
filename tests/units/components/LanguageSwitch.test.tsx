import { beforeEach, describe, expect, test, vi } from "vitest";
import { ComponentProps } from "react";
import { LanguageSwitch } from "@/components/dialogs/ResumeDialog/languageSwitch";
import { fireEvent, render, screen } from "@testing-library/react";

describe("LanguageSwitch", () => {
  let props: ComponentProps<typeof LanguageSwitch>;
  let rerender: (newProps: typeof props) => void;

  beforeEach(() => {
    props = {
      isEnglish: true,
      setIsEnglish: vi.fn(),
    };
    const { rerender: rerenderComponents } = render(
      <LanguageSwitch {...props} />,
    );
    rerender = (newProps = props) =>
      rerenderComponents(<LanguageSwitch {...newProps} />);
  });

  test("should render", () => {
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  test("should call setIsEnglish when clicked", () => {
    fireEvent.click(screen.getByRole("switch"));
    expect(props.setIsEnglish).toHaveBeenCalled();
    fireEvent.click(screen.getByRole("switch"));
    expect(props.setIsEnglish).toHaveBeenCalledTimes(2);
  });

  test("should call setIsEnglish when enter is pressed", () => {
    fireEvent.keyDown(screen.getByRole("switch"), { key: "Enter" });
    expect(props.setIsEnglish).toHaveBeenCalled();
    fireEvent.keyDown(screen.getByRole("switch"), { key: "Enter" });
    expect(props.setIsEnglish).toHaveBeenCalledTimes(2);
  });
});
