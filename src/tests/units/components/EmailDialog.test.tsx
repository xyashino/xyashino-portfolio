import { beforeEach, describe, expect, test, vi } from "vitest";
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { EmailDialog } from "@/components/dialogs/EmailDialog";
import { ComponentProps } from "react";

describe("EmailDialog", () => {
  let props: ComponentProps<typeof EmailDialog>;
  let rerender: (newProps?: ComponentProps<typeof EmailDialog>) => void;

  beforeEach(() => {
    props = {
      isOpen: true,
      isLoading: false,
      messages: [],
      handleClose: vi.fn(),
    };
    const { rerender: rerenderComponent } = render(<EmailDialog {...props} />);
    rerender = (newProps = props) =>
      rerenderComponent(<EmailDialog {...newProps} />);
  });

  test("should be render based on isOpen flag", async () => {
    expect(screen.getByTestId("modal")).toBeInTheDocument();
    expect(screen.getByTestId("email-dialog")).toBeInTheDocument();
    props.isOpen = false;
    rerender();
    await waitForElementToBeRemoved(() => screen.getByTestId("modal"));
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
    expect(screen.queryByTestId("email-dialog")).not.toBeInTheDocument();
  });

  test("should render a loading svg based on isLoading flag", () => {
    props.isLoading = true;
    rerender();
    expect(screen.getByTestId("loading")).toBeInTheDocument();
    props.isLoading = false;
    rerender();
    expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
  });

  test("should run close method when Esc is pressed", () => {
    fireEvent.keyDown(window, { key: "Escape" });
    expect(props.handleClose).toHaveBeenCalledTimes(1);
    fireEvent.keyDown(window, { key: "Escape" });
    expect(props.handleClose).toHaveBeenCalledTimes(2);
  });

  test("should block close method when isLoading is true", () => {
    props.isLoading = true;
    rerender();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(props.handleClose).toHaveBeenCalledTimes(0);
  });
  test("should render messages", () => {
    const messages = ["Test 1", "Test 2"];
    props.messages = messages;
    rerender();
    for (const message of messages) {
      expect(screen.getByText(message)).toBeInTheDocument();
    }
  });
});
