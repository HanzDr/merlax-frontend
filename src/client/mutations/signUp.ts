import { signUpService } from "../services/auth-service";
import type { signUpFormData } from "@/schemas/auth-schema";

export const signUpMutation = () => ({
  mutationKey: ["auth", "sign-up"],
  mutationFn: (formData: signUpFormData) => signUpService(formData),
});
