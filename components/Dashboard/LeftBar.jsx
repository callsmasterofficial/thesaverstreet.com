import React from "react";

function LeftBar({ setActiveTab, user }) {
  const logoutHandler = () => {
    localStorage.removeItem("session");
    window.location.replace("/");
  };
  return (
    <div className="user-panel-body-left">
      <div className="bg-white rounded p-4 mb-4 text-center shadow-sm">
        <img
          className="mb-3 mt-2 user-info-img"
          alt="Generic placeholder image"
          src={
            user
              ? user.profile
              : "https://super-dashboard-images-cdn.s3.amazonaws.com/images/1627990937677-placeholder-.jpeg"
          }
          loading="lazy"
          height="50px"
          width="50px"
          style={{borderRadius:"50%"}}
        />
        {user ? (
          <>
            <h6 className="text-black mb-2 text-gray-900">{user.name}</h6>
            <p className="m-0 text-break" style={{color: "#0d6fa1"}}>{user.email}</p>
          </>
        ) : (
          <>
            <div className="lineLoader mb-3 w-75"></div>
            <div className="lineLoader"></div>
          </>
        )}
      </div>
      <div className="user-panel-sidebar-link mb-4 bg-white rounded shadow-sm overflow-hidden nav nav-tabs">
        <a
          data-toggle="tab"
          href="javascript:void(0)"
          onClick={() => setActiveTab(0)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 22c3.976 0 8-1.374 8-4V6c0-2.626-4.024-4-8-4S4 3.374 4 6v12c0 2.626 4.024 4 8 4zm0-2c-3.722 0-6-1.295-6-2v-1.268C7.541 17.57 9.777 18 12 18s4.459-.43 6-1.268V18c0 .705-2.278 2-6 2zm0-16c3.722 0 6 1.295 6 2s-2.278 2-6 2-6-1.295-6-2 2.278-2 6-2zM6 8.732C7.541 9.57 9.777 10 12 10s4.459-.43 6-1.268V10c0 .705-2.278 2-6 2s-6-1.295-6-2V8.732zm0 4C7.541 13.57 9.777 14 12 14s4.459-.43 6-1.268V14c0 .705-2.278 2-6 2s-6-1.295-6-2v-1.268z"></path>
          </svg>{" "}
          Total Rewards
        </a>
        <a
          data-toggle="tab"
          href="javascript:void(0)"
          onClick={() => setActiveTab(1)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.5-8v2H11v2h2v-2h1a2.5 2.5 0 1 0 0-5h-4a.5.5 0 1 1 0-1h5.5V8H13V6h-2v2h-1a2.5 2.5 0 0 0 0 5h4a.5.5 0 1 1 0 1H8.5z"></path>
            </g>
          </svg>{" "}
          Withdraw Money
        </a>
        <a data-toggle="tab" href="javascript:void(0);" onClick={logoutHandler}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"></path>
          </svg>{" "}
          Logout
        </a>
      </div>
    </div>
  );
}

export default LeftBar;
