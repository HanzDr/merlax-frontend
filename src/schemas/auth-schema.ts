import z from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Must contain at least one special character"
    ),
});

export type loginFormData = z.infer<typeof loginFormSchema>;

export const signUpFormSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email("Invalid email address"),
    mobileNumber: z.string(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Must contain at least one special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password !== data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type signUpFormData = z.infer<typeof signUpFormSchema>;
