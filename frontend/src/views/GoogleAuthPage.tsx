import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleAuthenticate } from "@/redux/actions/authAction";
import { AppDispatch } from "@/redux/store";


export const GoogleAuthPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        const state = params.get("state");
        if (code && state) {
            try {
                dispatch(googleAuthenticate(code, state))
                    .then(() => {
                        navigate("/");
                    }).catch((error: Error) => {
                        console.error("Error during Google authentication:", error);
                    }
                    );
            }
            catch (error) {
                console.error("Error during Google authentication:", error);
            }
        }
    }, [dispatch, navigate]);

    return (
        <div className="flex items-center justify-center w-full">
            <div className="flex flex-col w-3/5 gap-6">
                <h1 className="text-2xl font-bold">Google Authentication</h1>
                <p className="text-balance text-muted-foreground">
                    If you see this page, it means that the authentication was successful.
                    You can close this page now.
                </p>
            </div>
        </div>
    );
}