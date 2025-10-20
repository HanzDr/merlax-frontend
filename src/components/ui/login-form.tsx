import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./input";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { FcGoogle } from "react-icons/fc";
import type { UseFormReturn } from "react-hook-form";
import { type loginFormData } from "@/schemas/auth-schema";

interface LoginFormProps {
  form: UseFormReturn<loginFormData>;
  onSubmit: (data: loginFormData) => void;
}

const LoginForm = ({ form, onSubmit }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;
  return (
    <Card className="w-full max-w-sm px-4 py-8 shadow-md">
      <CardHeader>
        <CardTitle className="text-yellow-400 text-3xl font-bold text-center">
          M E R L A X
        </CardTitle>
        <CardDescription className="text-center text-xs">
          Welcome back! Please enter your details
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <div>
              <Label htmlFor="email" className="text-sm font-semibold">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                className="text-sm"
                required
                placeholder="m@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="password" className="text-sm font-semibold">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                required
                className="text-sm"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <div className="flex gap-2">
              <Checkbox
                id="remember-me"
                className="data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400"
              />
              <Label htmlFor="remember-me" className="text-xs font-semibold">
                Remember me
              </Label>
            </div>

            <Link
              to="/forgot-password"
              className="text-xs text-blue-600 hover:underline text-center"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col w-full gap-2">
          <Button
            className="bg-yellow-400"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
          <Button className="bg-white border-2 text-black hover:bg-accent">
            <FcGoogle /> Sign in with google
          </Button>
          <p className="text-xs text-center">
            Don't have an account?{" "}
            <span className="text-yellow-400 font-semibold hover:underline cursor-pointer">
              Sign up for free!
            </span>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
