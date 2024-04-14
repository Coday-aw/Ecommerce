import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { useEffect } from "react";

function LoginPage() {
  const { token } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/auth/account");
    } else {
      navigate("/auth/login");
    }
  }, [token]);

  return <LoginForm />;
}
export default LoginPage;
