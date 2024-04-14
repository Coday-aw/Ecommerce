import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="bg-white">
      <div className="container m-auto h-screen max-w-screen-sm">
        <Outlet />
      </div>
    </div>
  );
}
export default AuthLayout;
