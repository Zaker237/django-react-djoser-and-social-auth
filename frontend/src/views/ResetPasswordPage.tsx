import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { resetPassword } from "@/redux/actions/authAction";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ResetPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { uid, token } = useParams();
  const [verified, setVerified] = useState(false);
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordConfirmation === e.target.value) {
      setIsPasswordMatch(true);
    } else {
      setIsPasswordMatch(false);
    }
  };

  const handlePasswordConfirmationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirmation(e.target.value);
    if (password === e.target.value) {
      setIsPasswordMatch(true);
    } else {
      setIsPasswordMatch(false);
    }
  };

  const handleVerifyAccount = () => {
    if (!uid || !token) {
      return;
    }
    dispatch(resetPassword(uid, token, password, passwordConfirmation));
    setVerified(true);
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col w-3/5 gap-6">
        <Card className="overflow-hidden w-full">
          <CardContent className="flex w-full items-center justify-center p-8 min-h-12">
            <div className="flex inset-0 flex items-center justify-center">
              {verified ? (
                <div className="flex flex-col items-center justify-center gap-2 p-4 text-center md:p-8">
                  <p className="text-lg font-semibold">
                    Password reset successfully!
                  </p>
                  <Button onClick={() => navigate("/login")}>
                    Go to Login
                  </Button>
                </div>
              ) : (
                <div className="flex w-full items-center justify-center gap-2 p-4 text-center md:p-8">
                  <div className="flex relative md:block">
                    <img
                      src="/placeholder.svg"
                      alt="Image"
                      className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    />
                  </div>
                  <form
                    className="w-full p-6 md:p-8"
                    onSubmit={handleVerifyAccount}
                  >
                    <div className="flex flex-col gap-6 w-full">
                      <div className="flex flex-col items-center text-center">
                        <h1 className="text-2xl font-bold">Reset Password</h1>
                        <p className="text-balance">Enter your new password</p>
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
                        <Button
                          className="w-full"
                          type="submit"
                          disabled={!isPasswordMatch}
                        >
                          Reset Password
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
