import { FieldError, UseFormRegister } from "react-hook-form";

export type TFeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

export type TFormData = {
  name: string;
  email: string;
  password: string;
};

export type TInputFieldProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  icon?: React.ElementType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  validation?: object;
  error?: FieldError;
}
