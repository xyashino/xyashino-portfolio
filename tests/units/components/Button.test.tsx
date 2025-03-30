import {Button} from "@/components/button";
import {fireEvent, render, screen} from "@testing-library/react";
import {ComponentProps} from "react";
import {beforeEach, describe, expect, test, vi} from "vitest";

describe("Button", () => {
  let btnText: string;
  let props: ComponentProps<typeof Button>;
  let rerender: (newProps?: typeof props) => void;

  beforeEach(() => {
    btnText = "Test";
    props = {
      className: "test-class",
      skewClassName: "test-skew-class",
      textClassName: "test-text-class",
      onClick: vi.fn(),
    };
    const {rerender: rerenderComponent} = render(
      <Button {...props}>{btnText}</Button>
    );
    rerender = (newProps = props) =>
      rerenderComponent(<Button {...newProps}>{btnText}</Button>);
  });

  test("should be rendered", () => {
    const btnElement = screen.getByRole("button");
    expect(btnElement).toBeInstanceOf(HTMLButtonElement);
  });

  test("should properly implement classes", () => {
    props.className = "test-class";
    props.skewClassName = "test-skew-class";
    props.textClassName = "test-text-class";

    const btnElement = screen.getByRole("button");
    expect(btnElement).toHaveClass(props.className);

    const textElement = screen.getByText(btnText);
    expect(textElement).toHaveClass(props.textClassName);

    const skewElement = screen.getByTestId("skew");
    expect(skewElement).toHaveClass(props.skewClassName);
  });

  test("should run onClick", () => {
    const btnElement = screen.getByRole("button");
    fireEvent.click(btnElement);
    expect(props.onClick).toBeCalledTimes(1);
    fireEvent.click(btnElement);
    expect(props.onClick).toBeCalledTimes(2);
  });
});
