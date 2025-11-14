import { apiRequest } from "@/lib/api-client";
import { type signUpFormData } from "@/schemas/auth-schema";

export interface AuthUser {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: string;
}

export interface SignUpResponse {
  user: AuthUser;
  token: string;
}

const mapSignUpFormToPayload = async (payload: signUpFormData) => {
  return {
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    phoneNumber: payload.phoneNumber,
    birthdate: payload.birthdate.toISOString(),
    password: payload.password,
  };
};

export const signUpService = async (signUpFormData: signUpFormData) => {
  const payload = mapSignUpFormToPayload(signUpFormData);

  return apiRequest<SignUpResponse>("/auth/signup", {
    method: "POST",
    body: payload,
  });
};
