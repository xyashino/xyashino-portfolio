import { describe, test, expect, beforeEach } from "vitest";
import { ComponentProps } from "react";
import { HighlightedText } from "@/components/dialogs/ResumeDialog/highlightedText";
import { render, screen } from "@testing-library/react";

describe("HighlightedText", () => {
  let props: ComponentProps<typeof HighlightedText>;
  let rerender: (newProps?: typeof props) => void;

  beforeEach(() => {
    props = {
      highlight: false,
      text: "text",
    };

    const { rerender: rerenderComponent } = render(
      <HighlightedText {...props} />,
    );
    rerender = (newProps = props) =>
      rerenderComponent(<HighlightedText {...newProps} />);
  });

  test("should be rendered", () => {
    expect(screen.getByTestId("highlighted-text")).toBeInTheDocument();
  });

  test("should render with text", () => {
    expect(screen.getByText(props.text)).toBeInTheDocument();
  });

  test("should apply classes correctly", () => {
    const highlightClass = "bg-secondary text-secondary-content";
    expect(screen.getByTestId("highlighted-text")).not.toHaveClass(
      highlightClass,
    );

    props.highlight = true;
    rerender();
    expect(screen.getByTestId("highlighted-text")).toHaveClass(highlightClass);
  });
});
