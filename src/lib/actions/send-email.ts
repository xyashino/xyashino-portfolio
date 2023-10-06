"use server";
import { ValidateForm } from "@/lib/utils/validate-form";
import { Resend } from "resend";
import { getHtmlEmailTemplate } from "@/lib/utils/get-html-email-template";

const { RESEND_API_KEY, RESEND_FROM, RESEND_TO } = process.env;

if (!RESEND_API_KEY || !RESEND_FROM || !RESEND_TO)
  throw new Error("Missing environment variables!");

const resend = new Resend(RESEND_API_KEY);

export const sendEmail = async (e: FormData) => {
  const email = e.get("email")?.toString();
  const name = e.get("name")?.toString();
  const message = e.get("message")?.toString();

  try {
    const validatedData = ValidateForm({ email, name, message });
    await resend.emails.send({
      from: RESEND_FROM,
      to: RESEND_TO,
      subject: `New message from ${validatedData.name}!`,
      html: getHtmlEmailTemplate(validatedData),
    });
    return {
      message: `Message was sent! Will be in touch in the near future.`,
    };
  } catch (e: unknown) {
    let error = "Something went wrong!";
    if (e instanceof Error) error = e.message;
    if (typeof e === "string") error = e;
    console.error(e);
    return { error };
  }
};