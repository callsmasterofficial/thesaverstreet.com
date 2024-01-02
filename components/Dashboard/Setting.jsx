import axios from "axios";
import React, { useState } from "react";

function Setting() {
  return (
    <section className="login-main-body">
      <div className="container-fluid pl-0 pr-0">
        <form>
          <div className="mb-4">
            <input
              type="password"
              className="form-control rounded-pill ps-3"
              placeholder="Enter Current Password"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control rounded-pill ps-3"
              placeholder="Enter New Password"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control rounded-pill ps-3"
              placeholder="Confirm New Password"
            />
          </div>
          <button type="submit" className="btn btn-primary rounded-pill px-3 py-2">
            Update Password
          </button>
        </form>
      </div>
    </section>
  );
}

export default Setting;
