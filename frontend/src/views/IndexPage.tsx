import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { loadUser } from "@/redux/actions/authAction";
import { AuthState } from "@/models/AuthState";

export const IndexPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const authState: AuthState = useSelector((state: any) => state["auth"]);

  useEffect(() => {
    if (authState.IsAuthenticated) {
      dispatch(loadUser());
    }
  }, [authState.IsAuthenticated]);
  return (
    <div className="w-full max-w-sm">
      Welcome to
      <br />
      {authState.IsAuthenticated ? "Authenticated" : "Unauthenticated"}
      <br />
      {authState.User ? (
        <>
          {authState.User.first_name} {authState.User.last_name}
          <br />
          {authState.User.email}
        </>
      ) : null}
      <br />
      Django React+TS Djoser and Social-Auth
    </div>
  );
};
