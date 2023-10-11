import { test, describe, expect, beforeEach, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { SlideController } from "@/components/about/EducationSlider/SlideController";
import { ComponentProps } from "react";

describe("SlideController", () => {
  let props: ComponentProps<typeof SlideController>;
  let rerender: (newProps?: typeof props) => void;

  beforeEach(() => {
    props = {
      changeSlide: vi.fn(),
    };
    const { rerender: rerenderComponent } = render(
      <SlideController {...props} />,
    );
    rerender = (newProps = props) =>
      rerenderComponent(<SlideController {...newProps} />);
  });

  test("should be render", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByTestId("arrow")).toBeInTheDocument();
  });

  test("should be render with iconClasses", () => {
    const classes = "text-red";
    props.iconClasses = classes;
    rerender();

    expect(screen.getByTestId("arrow")).toHaveClass(classes);
  });

  test("should be call changeSlide", () => {
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(props.changeSlide).toHaveBeenCalledTimes(1);
    fireEvent.click(button);
    expect(props.changeSlide).toHaveBeenCalledTimes(2);
  });
});
