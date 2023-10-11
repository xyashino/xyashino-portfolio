import { beforeEach, describe, expect, test } from "vitest";
import { TagList } from "@/components/TagList";
import { render, screen } from "@testing-library/react";

describe("TagList", () => {
  const tags = ["test", "test2", "test3"];

  beforeEach(() => {
    render(<TagList tags={tags} />);
  });

  test("should render tags with proper values", () => {
    for (const tag of tags) {
      const tagElement = screen.getByText(tag);
      expect(tagElement).toBeInTheDocument();
      expect(tagElement.textContent).toBe(tag);
    }
  });
});
