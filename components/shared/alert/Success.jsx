import React from "react";

const Success = ({ success }) => {
  return (
    <div>
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <strong>Success!</strong> {success}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default Success;
