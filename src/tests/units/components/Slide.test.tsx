import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Slide } from "@/components/about/EducationSlider/Slide";
import { ComponentProps } from "react";

describe("Slide", () => {
  let props: ComponentProps<typeof Slide>;
  let rerender: (newProps?: typeof props) => void;

  beforeEach(() => {
    props = {
      subtitle: "test subtitle",
      title: "test title",
      content: "test content",
    };
    const { rerender: rerenderComponent } = render(<Slide {...props} />);
    rerender = (newProps = props) => rerenderComponent(<Slide {...newProps} />);
  });

  test("should be render", () => {
    expect(screen.getByText(props.title)).toBeInTheDocument();
  });

  test("should properly render props", () => {
    props.content = "test content";
    props.subtitle = "test subtitle";
    props.title = "test title";
    rerender();
    expect(screen.getByText(props.subtitle)).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.content as string)).toBeInTheDocument();
  });

  test("should render image", () => {
    props.image = {
      src: "https://test.com",
      alt: "test",
    };
    rerender();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("shouldn't render image", () => {
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
