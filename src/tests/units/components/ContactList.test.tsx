import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContactList } from "@/components/contact/ContactList";

const CONTACT_DATA = [
  {
    title: "Mock Title 1",
    link: "http://mocklink1.com",
    text: "Mock Text 1",
  },
  {
    title: "Mock Title 2",
    link: "http://mocklink2.com",
    text: "Mock Text 2",
  },
];
vi.mock("@/config/constants/contact", () => ({
  CONTACT_DATA: [
    {
      title: "Mock Title 1",
      link: "http://mocklink1.com",
      text: "Mock Text 1",
    },
    {
      title: "Mock Title 2",
      link: "http://mocklink2.com",
      text: "Mock Text 2",
    },
  ],
}));

describe("ContactList", () => {
  beforeEach(() => {
    render(<ContactList />);
  });

  test("should render", () => {
    expect(screen.getByTestId("contact-list")).toBeInTheDocument();
  });

  test("should render 2 links", () => {
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });

  test("should render 2 links with correct text", () => {
    for (const { title } of CONTACT_DATA) {
      expect(
        screen.getByText((content) => content.startsWith(title)),
      ).toBeInTheDocument();
    }
  });

  test("should render links with correct attributes", () => {
    for (const { link, title } of CONTACT_DATA) {
      const el = screen.getByText((content) => content.startsWith(title));
      expect(el).toHaveAttribute("href", link);
    }
  });
});
