export const validateForm = ({
  message,
  name,
  email
}: FormValues): FormValidationResult => {
  const errors: string[] = []
  if (!name && !email && !message) errors.push('All fields are required')
  if (errors.length > 0) return errors

  if (!name) errors.push('Name is required')
  if (!email) errors.push('Email is required')
  if (!message) errors.push('Message is required')
  if (errors.length > 0) return errors

  if (!email?.includes('@')) errors.push('Email should include @')
  if (!email?.includes('.')) errors.push("Email should include '.'")
  if (email?.length && email.length < 5) errors.push('Email is too short')
  if (errors.length > 0) return errors

  if (!message || !name || !email) return ['All fields are required']

  return { message, name, email }
}
