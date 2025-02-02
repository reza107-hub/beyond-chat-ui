"use client";

import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import { TFormData } from "@/utils/Type";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import useAuth from "@/hooks/useAuth";
import Swal from "sweetalert2";

const RegisterFields = () => {
  const { createUser, updateUserProfile, verifyEmail } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();

  const onSubmit = async (data: TFormData) => {
    const { name, email, password } = data;
    try {
      const res = await createUser(email, password);
      if (res.user.email === email) {
        await updateUserProfile(name, "");
        await verifyEmail();
        Swal.fire({
          title: "Registration Successful Check email to verify",
          icon: "success",
        }).then(() => {
          window.location.href = "/";
        });
      }
    } catch (error) {
      console.log(error);
    }
    // Handle form submission here
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputField
        id="name"
        label="Full Name"
        placeholder="Enter your name"
        type="text"
        icon={User}
        register={register}
        validation={{
          required: "Name is required",
          minLength: { value: 2, message: "Must be at least 2 characters" },
        }}
        error={errors.name}
      />

      <InputField
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        icon={Mail}
        register={register}
        validation={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
        error={errors.email}
      />

      <InputField
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        icon={Lock}
        register={register}
        validation={{
          required: "Password is required",
          minLength: { value: 8, message: "Must be at least 8 characters" },
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message: "Must contain at least one letter and one number",
          },
        }}
        error={errors.password}
      />

      <Button type="submit" className="w-full">
        Create Account
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
};

export default RegisterFields;
