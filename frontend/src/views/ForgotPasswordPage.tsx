import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthService } from "@/services/AuthService";

export const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isRequestSent, setIsRequestSent] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await AuthService.forgotPassword(email);
      setIsRequestSent(true);
    } catch (error) {
      console.error(error);
      setError("Failed to send password reset email. Please try again.");
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col w-3/5 gap-6">
        <Card className="overflow-hidden w-full">
          <CardContent className="w-full grid p-0 md:grid-cols-2">
            <div className="relative hidden bg-muted md:block">
              <img
                src="/placeholder.svg"
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              />
            </div>
            {isRequestSent ? (
              <div className="flex flex-col items-center justify-center w-full h-full text-center">
                <h1 className="text-2xl font-bold">Check your email</h1>
                <p className="text-balance text-muted-foreground">
                  We have sent you a password reset link to your email address.
                </p>
                <Link
                  to={"/login"}
                  className="text-balance text-muted-foreground underline mt-4"
                >
                  <Button>Go to Login</Button>
                </Link>
              </div>
            ) : (
              <form className="p-6 md:p-8" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6 w-full">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">Reset Password</h1>
                    <p className="text-balance text-muted-foreground">
                      Enter your email to request Password Reset
                    </p>
                  </div>
                  {error && (
                    <div className="flex flex-col items-center justify-center w-full h-full text-center">
                      <h1 className="text-2xl font-bold text-red-500">Error</h1>
                      <p className="text-balance text-red-500">{error}</p>
                      <Link
                        to={"/login"}
                        className="text-balance text-red-500 underline mt-4"
                      >
                        <Button>Go Back</Button>
                      </Link>
                    </div>
                  )}
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="flex w-full">
                    <Button className="w-full" type="submit">
                      Request Password Reset
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
