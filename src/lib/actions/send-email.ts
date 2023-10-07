"use server";
import { Resend } from "resend";
import {
  getHtmlEmailTemplate,
  TemplateData,
} from "@/lib/utils/get-html-email-template";
import { validateForm } from "@/lib/utils/validate-form";

const { RESEND_API_KEY, RESEND_FROM, RESEND_TO } = process.env;

if (!RESEND_API_KEY || !RESEND_FROM || !RESEND_TO)
  throw new Error("Missing environment variables!");

const resend = new Resend(RESEND_API_KEY);

export const sendEmail = async (e: FormData) => {
  const email = e.get("email")?.toString().trim();
  const name = e.get("name")?.toString().trim();
  const message = e.get("message")?.toString().trim();

  try {
    const validatedData = validateForm({ email, name, message });
    if (Array.isArray(validatedData)) return { error: validatedData };
    await resend.emails.send({
      from: RESEND_FROM,
      to: RESEND_TO,
      subject: `New message from ${validatedData.name}!`,
      html: getHtmlEmailTemplate(validatedData as TemplateData),
    });
    return {
      message: ["Message was sent! Will be in touch in the near future."],
    };
  } catch (e: unknown) {
    let error = "Something went wrong!";
    if (e instanceof Error) error = e.message;
    if (typeof e === "string") error = e;
    console.error(e);
    return { error: [error] };
  }
};
