import React from "react";
import { LoginForm } from "@/components/login-form"


export const LoginPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <LoginForm className="w-4/5" />
        </div>
    )
}