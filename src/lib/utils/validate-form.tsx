interface FormValues {
  name?: string;
  email?: string;
  message?: string;
}

export const ValidateForm = ({ message, name, email }: FormValues) => {
  if (!name && !email && !message) throw new Error("Empty form");
  if (!name) throw new Error("Name is required");
  if (!email) throw new Error("Email is required");
  if (!message) throw new Error("Message is required");
  if (!email.includes("@")) throw new Error("Email is invalid");
  return { message, name, email };
};
