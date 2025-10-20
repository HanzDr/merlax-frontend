import LoginForm from "@/components/ui/login-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, type loginFormData } from "@/schemas/auth-schema";

const LoginPage = () => {
  const form = useForm<loginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { email: "", password: "" },
  });

  // Logic placeholder for now
  const onSubmit = async (loginFormData: loginFormData) => {
    try {
      console.log("Submitting to API:", loginFormData);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="min-h-dvh overflow-x-hidden bg-[url('/src/assets/login-page-image.png')] bg-cover bg-center flex items-center justify-center px-4">
      <LoginForm form={form} onSubmit={onSubmit} />
    </div>
  );
};

export default LoginPage;
