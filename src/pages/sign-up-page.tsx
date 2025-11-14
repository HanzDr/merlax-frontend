import SignUpForm from "@/components/ui/sign-up-form";
import { useForm } from "react-hook-form";
import { type signUpFormData, signUpFormSchema } from "@/schemas/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpPage = () => {
  const form = useForm<signUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  });

  const onSubmit = (formData: signUpFormData) => {};

  return (
    <div className="flex min-h-screen justify-center items-center">
      <SignUpForm form={form} onSubmit={onSubmit} />
    </div>
  );
};

export default SignUpPage;
