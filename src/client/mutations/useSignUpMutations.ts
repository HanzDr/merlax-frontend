// src/client/mutations/useSignUpMutation.ts
import { useMutation } from "@tanstack/react-query";
import { signUpService } from "../services/auth-service";
import type { signUpFormData } from "@/schemas/auth-schema";

export function useSignUpMutation() {
  return useMutation({
    mutationKey: ["auth", "sign-up"],
    mutationFn: (formData: signUpFormData) => signUpService(formData),
  });
}
