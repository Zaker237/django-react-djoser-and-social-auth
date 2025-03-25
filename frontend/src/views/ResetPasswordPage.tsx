import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ResetPasswordPage: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirmation(e.target.value);
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
            <form className="p-6 md:p-8">
              <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Reset Password</h1>
                  <p className="text-balance text-muted-foreground">
                    Enter your new password
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password_confirmation">
                      Password Confirmation
                    </Label>
                  </div>
                  <Input
                    id="password_confirmation"
                    type="password"
                    required
                    value={passwordConfirmation}
                    onChange={handlePasswordConfirmationChange}
                  />
                </div>
                <div className="flex w-full">
                  <Button className="w-full" type="submit">
                    Reset Password
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
