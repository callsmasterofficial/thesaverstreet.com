import React from "react";

function Withdraw() {
  return (
    <div>
      <div className="row my-4">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">
                Available balance: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c3.976 0 8-1.374 8-4V6c0-2.626-4.024-4-8-4S4 3.374 4 6v12c0 2.626 4.024 4 8 4zm0-2c-3.722 0-6-1.295-6-2v-1.268C7.541 17.57 9.777 18 12 18s4.459-.43 6-1.268V18c0 .705-2.278 2-6 2zm0-16c3.722 0 6 1.295 6 2s-2.278 2-6 2-6-1.295-6-2 2.278-2 6-2zM6 8.732C7.541 9.57 9.777 10 12 10s4.459-.43 6-1.268V10c0 .705-2.278 2-6 2s-6-1.295-6-2V8.732zm0 4C7.541 13.57 9.777 14 12 14s4.459-.43 6-1.268V14c0 .705-2.278 2-6 2s-6-1.295-6-2v-1.268z"></path></svg> Rs. 0
              </h5>
              <p className="card-text">
                <strong className=" text-success">
                  Cashback : Rs. 0, Rewards : Rs. 0, Voucher : Rs. 0
                </strong>
                <br></br>
                Your balance is Rs. 250 below the minimum withdrawal limit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">E-WALLET</h5>
              <img
                src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1629965911698-paypal-logo.png"
                width="100px"
                alt="paytm"
                loading="lazy"
              ></img>
              <p className="card-text">Our wallet partners</p>
              <button href="#" className="btn btn-danger mb-4">
                Create Request
              </button>
              <p className="card-text">Min for Paypal: Rs. 250, DTH: Rs. 250</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">BANK</h5>
              <img
                src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1629966116510-money-transfer.png"
                width="100px"
                alt="paytm"
                loading="lazy"
              ></img>
              <p className="card-text">
                You can request an NEFT transfer to your bank account.
              </p>
              <button href="#" className="btn btn-danger mb-4">
                Create Request
              </button>
              <p className="card-text">Minimum Withdrawal: Rs. 250</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
