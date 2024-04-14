import { Provider } from "react-redux";
import { store } from "../store";
import { AuthProvider } from "./AuthContext";

const Providers = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <Provider store={store}>{children}</Provider>
      </AuthProvider>
    </>
  );
};
export default Providers;
