import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { Logout } = useAuth();
  const { token } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/auth/login");
    }
  }, [token]);
  const handleLogout = async () => {
    Logout();
  };

  return (
    <div className="shadow-2xl mt-11 p-10">
      <div className="flex flex-row justify-between align-center">
        <h1>Account</h1>
        <Link
          to="/auth/login"
          className="bg-blue-500 h-12 p-3 uppercase"
          onClick={handleLogout}
        >
          LogOut
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        <Link to="/auth/myOrder" className=" bg-green-300 p-3 text-2xl">
          View your orders
        </Link>
        <Link to="/product" className=" bg-blue-300 p-3 text-2xl">
          Coninue shopping
        </Link>
      </div>
    </div>
  );
};
export default Account;
