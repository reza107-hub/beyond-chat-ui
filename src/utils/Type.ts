/* eslint-disable @typescript-eslint/no-explicit-any */
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
  register: UseFormRegister<any>;
  validation?: object;
  error?: FieldError;
}

export type TAuthContext = {
  user: any;

  loading: boolean;

  createUser: (email: string, password: string) => Promise<any>;

  signIn: (email: string, password: string) => Promise<any>;

  googleSignIn: () => Promise<any>;

  logOut: () => Promise<void>;

  updateUserProfile: (name: string, photo: string) => Promise<void> | undefined;

  verifyEmail: () => Promise<void> | undefined;
};