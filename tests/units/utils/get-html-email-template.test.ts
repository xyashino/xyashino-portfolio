import { describe, expect, test } from "vitest";
import { getHtmlEmailTemplate } from "@/lib/utils/get-html-email-template";

describe("getHtmlEmailTemplate method:", () => {
  test("html template should include provided data", () => {
    const email = "test@gmail.com";
    const name = "test name";
    const message = "test message";

    const template = getHtmlEmailTemplate({ email, name, message });
    expect(template).toContain(email);
    expect(template).toContain(name);
    expect(template).toContain(message);
  });
});
