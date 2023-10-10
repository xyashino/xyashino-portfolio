interface FormValues {
  name?: string | null;
  email?: string | null;
  message?: string | null;
}

type FormValidationSuccessResult = NotNullish<FormValues>;

type FormValidationResult = string[] | FormValidationSuccessResult;
