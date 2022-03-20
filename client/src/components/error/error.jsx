import React from "react";
import "./error.css";

const Error = ({ errorMessage, showError, setShowError }) => {
  setTimeout(() => {
    setShowError(false);
  }, 4000);
  return (
    <div
      className="error"
      style={
        showError
          ? { transform: "translate(-50% , -250%)" }
          : { transform: "translate(-50% , 150%)" }
      }
    >
      <p> {errorMessage}</p>
    </div>
  );
};

export default Error;
