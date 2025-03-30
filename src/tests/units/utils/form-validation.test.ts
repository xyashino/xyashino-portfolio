import { describe, expect, expectTypeOf, test } from "vitest";
import { validateForm } from "@/lib/utils/validate-form";

describe("formValidation method:", () => {
  const testValidationError = (data: FormValues, minimalLength: number = 1) => {
    const result = validateForm(data);
    expectTypeOf(result).not.toEqualTypeOf<FormValidationSuccessResult>();
    expect(result).toBeInstanceOf(Array);
    expect((result as Array<string>).length).toBeGreaterThanOrEqual(
      minimalLength,
    );
    expectTypeOf(result).toBeArray();
  };

  const defaultMessage = "test message";
  const defaultName = "test name";
  const defaultEmail = "test@gmail.com";

  describe("Error scenarios:", () => {
    test("should return errors if values are nullish or empty string", () => {
      const testCases: FormValues[] = [
        { email: "", name: null, message: "" },
        { email: "", name: "test", message: null },
        { email: "", name: "test", message: "test" },
        { email: null, name: "test", message: "test" },
      ];

      testCases.forEach((data) => testValidationError(data));
    });

    test("should return error if email is invalid", () => {
      const invalidEmails = ["test", "test@", "@test", "test@test", "z@.z"];
      invalidEmails.forEach((invalidEmail) =>
        testValidationError({
          email: invalidEmail,
          name: defaultName,
          message: defaultMessage,
        }),
      );
    });

    test("should return error if message is empty string", () => {
      testValidationError({
        email: defaultEmail,
        name: defaultName,
        message: "",
      });
    });

    test("should return error if name is empty string", () => {
      testValidationError({
        email: defaultEmail,
        name: "",
        message: defaultMessage,
      });
    });
  });

  describe("Success scenarios:", () => {
    test("should return  valid data when all values are valid", () => {
      const result = validateForm({
        email: defaultEmail,
        name: defaultName,
        message: defaultMessage,
      });
      expectTypeOf(result).toEqualTypeOf<FormValidationSuccessResult>();
      expectTypeOf(result).not.toEqualTypeOf<Array<string>>();
      expect(result).not.toBeInstanceOf(Array);
      expect(result).toEqual({
        email: defaultEmail,
        name: defaultName,
        message: defaultMessage,
      });
    });
  });
});
