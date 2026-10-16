import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "./input";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { Eye, EyeOff } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";
import { type loginFormData } from "@/schemas/auth-schema";

interface LoginFormProps {
  form: UseFormReturn<loginFormData>;
  onSubmit: (data: loginFormData) => void;
}

const underlineInput =
  "h-10 rounded-none border-0 border-b border-neutral-800 bg-transparent px-0 text-sm shadow-none focus-visible:border-merlax-gold focus-visible:ring-0";

const LoginForm = ({ form, onSubmit }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <Card className="w-full max-w-md gap-0 rounded-3xl border-0 px-6 pt-14 pb-20 font-inter shadow-xl sm:px-8">
      <CardHeader className="justify-items-center gap-3">
        <CardTitle className="font-playfair text-5xl font-medium text-merlax-gold">
          MERLAX
        </CardTitle>
        <p className="text-xs text-neutral-900">Login</p>
      </CardHeader>
      <CardContent className="mt-26">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className="flex flex-col gap-12">
            <div>
              <Label htmlFor="email" className="text-sm text-neutral-900">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                className={underlineInput}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="password" className="text-sm text-neutral-900">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className={`${underlineInput} pr-8`}
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-0 bottom-2 text-neutral-900"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <Link
            to="/forgot-password"
            className="mt-6 self-start text-xs text-sky-500 hover:underline"
          >
            Forgot Password?
          </Link>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-10 h-10 rounded-sm bg-merlax-gold font-semibold text-white hover:bg-merlax-gold/90"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
