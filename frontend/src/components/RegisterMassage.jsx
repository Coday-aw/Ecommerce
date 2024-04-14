import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RegisterMessage = ({ isSuccess }) => {
  return (
    <div className="flex justify-center p-11">
      {isSuccess ? (
        <div
          className="text-center max-w-3xl shadow-2xl mt-20 mb-20 p-10"
          role="alert"
        >
          <h2>You have successfully created an account!</h2>
        </div>
      ) : (
        <div className="alert alert-danger" role="alert">
          Something went wrong, please try again.
        </div>
      )}
    </div>
  );
};

export default RegisterMessage;
