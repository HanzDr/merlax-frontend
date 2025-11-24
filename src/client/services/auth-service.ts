import { apiRequest } from "@/lib/api-client";
import { type signUpFormData, type loginFormData } from "@/schemas/auth-schema";

export interface AuthUser {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  mobileNumber: string;
  role: string;
}

export interface SignUpResponse {
  user: AuthUser;
  token: string;
}

export interface LoginResponse extends SignUpResponse {}

// Helper Method
const mapSignUpFormToPayload = async (payload: signUpFormData) => {
  return {
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    mobileNumber: payload.mobileNumber,
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

// Helper Method
const mapLoginFormToPayload = async (payload: loginFormData) => {
  return {
    email: payload.email,
    passowrd: payload.password,
  };
};
export const loginService = async (loginFormData: loginFormData) => {
  const payload = mapLoginFormToPayload(loginFormData);
  return apiRequest<LoginResponse>("/auth/login", {
    method: "GET",
    body: JSON.stringify(payload),
  });
};

// TODO: Need to create a route for this
export async function fetchUser() {
  return apiRequest<LoginResponse>("/auth/me", {
    method: "GET",
    credentials: "include",
  });
}
