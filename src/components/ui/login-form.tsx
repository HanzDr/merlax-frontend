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

interface LoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="w-92 h-110 p-4 shadow-xs">
        <CardHeader>
          <CardTitle className="text-yellow-400 text-3xl font-bold text-center">
            MERLAX
          </CardTitle>
          <CardDescription className="text-center text-xs">
            Welcome back! Please enter your details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action="submit">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-sm font-semibold">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                className="text-sm"
                required
                placeholder="m@example.com"
              />
              <Label htmlFor="password" className="text-sm font-semibold">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                required
                className="text-sm"
              />
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
            <Button className="bg-yellow-400" type="submit">
              Sign in
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
    </div>
  );
};

export default LoginForm;
