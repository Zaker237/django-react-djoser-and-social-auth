import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { activate } from "@/redux/actions/authAction";
import { AppDispatch } from "@/redux/store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const AccountActivationPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { uid, token } = useParams();
  const [verified, setVerified] = useState(false);

  const handleVerifyAccount = () => {
    if (!uid || !token) {
      return;
    }
    dispatch(activate(uid, token));
    setVerified(true);
  };

  useEffect(() => {
    if (verified) {
      navigate("/");
    }
  }, [verified, navigate]);

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col w-3/5 gap-6">
        <Card className="overflow-hidden w-full">
          <CardContent className="flex w-full items-center justify-center p-8 min-h-12">
            {!uid || !token ? (
              <h1>Invalid activation link</h1>
            ) : (
              <div className="flex flex-col items-center justify-center">
                {!verified ? (
                  <>
                    <h1> Click the button to verify your account</h1>
                    <Button
                      onClick={handleVerifyAccount}
                      type="submit"
                      className="mt-4 min-w-6 cursor-pointer"
                    >
                      Verify
                    </Button>
                  </>
                ) : (
                  <>
                    <h1>Account activated successfully</h1>
                    <Button
                      onClick={() => navigate("/login")}
                      type="submit"
                      className="mt-4 min-w-6 cursor-pointer"
                    >
                      Login
                    </Button>
                  </>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
