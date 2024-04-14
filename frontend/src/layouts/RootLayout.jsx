import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Providers from "../components/Provider";

function RootLayout() {
  return (
    <Providers>
      <div className="bg-white">
        <Navbar />
        <div className="container m-auto">
          <Outlet />
        </div>
      </div>
    </Providers>
  );
}
export default RootLayout;
