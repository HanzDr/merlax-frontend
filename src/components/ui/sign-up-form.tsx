import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Checkbox } from "./checkbox";
import { Link } from "react-router-dom";
import { type signUpFormData } from "@/schemas/auth-schema";
import type { UseFormReturn } from "react-hook-form";
import { Controller } from "react-hook-form";
import { Input } from "./input";
import { PhoneInput } from "./phone-input";
import { FcGoogle } from "react-icons/fc";
import { Button } from "./button";

interface SignUpFormProps {
  form: UseFormReturn<signUpFormData>;
  onSubmit: (signUpFormData: signUpFormData) => void;
}

const SignUpForm = ({ form, onSubmit }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <Card className="w-full max-w-sm px-4 py-8 shadow-md">
      <CardHeader>
        <CardTitle className="text-yellow-400 text-3xl font-bold text-center">
          MERLAX
        </CardTitle>
        <CardDescription className="text-center text-xs">
          Create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            {/* Phone Number */}
            <div>
              <Label htmlFor="number" className="text-sm font-semibold">
                Phone Number
              </Label>
              <Controller
                name="mobileNumber"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    defaultCountry="PH"
                    placeholder="912 345 6789"
                    required
                  />
                )}
              />
              {errors.mobileNumber && (
                <p className="text-red-500 text-xs">
                  {errors.mobileNumber.message}
                </p>
              )}
            </div>
            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-sm font-semibold">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                className="text-sm"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>
            {/* Password */}
            <div>
              <Label htmlFor="password" className="text-sm font-semibold">
                Enter your password
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
            {/* Re-Enter Password */}
            <div>
              <Label
                htmlFor="confirmPassword"
                className="text-sm font-semibold"
              >
                Re-Enter your password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                required
                className="text-sm"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <div className="flex gap-2">
              <Checkbox id="remember-me" />
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
          <div className="flex flex-col w-full gap-2">
            <Button
              className="bg-yellow-400"
              type="submit"
              disabled={isSubmitting}
            >
              Sign in
            </Button>
            <p className="text-center font-bold text-xs">or</p>
            <Button className="bg-white border-2 text-black hover:bg-accent">
              <FcGoogle /> Continue with google
            </Button>
          </div>

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

export default SignUpForm;
