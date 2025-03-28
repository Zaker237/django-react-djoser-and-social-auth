import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./views/LoginPage";
import { IndexPage } from "./views/IndexPage";
import { SignupPage } from "./views/SignupPage";
import { ForgotPasswordPage } from "./views/ForgotPasswordPage";
import { ResetPasswordPage } from "./views/ResetPasswordPage";
import { AccountActivationPage } from "./views/AccountActivationPage";

function App() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Router>
        <div className="flex w-full items-center justify-center">
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route
              path="/password/reset/confirm/:uid/:token"
              element={<ResetPasswordPage />}
            />
            <Route
              path="/activate/:uid/:token"
              element={<AccountActivationPage />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
