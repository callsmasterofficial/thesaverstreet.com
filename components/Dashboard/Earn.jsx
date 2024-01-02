import axios from "axios";
import React, { useEffect, useState } from "react";

function Earn() {
  const [sale, setSale] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [pending, setPending] = useState(0);
  const [cancled, setCancled] = useState(0);
  const [withdrawAble, setWithdrawable] = useState(0);
  const [error, setError] = useState("");
  //   const token = localStorage.getItem("coupon2dealToken");

  const pendingStatus = ["pending"];
  const rejectedStatus = ["approved_but_stalled", "declined", "cancled"];
  const approvedStatus = ["1", "approved", "active", 1];

  const payment_pending = ["pending", "unpaid", "0", 0];
  const payment_rejected = ["approved_but_stalled", "declined", "cancled"];
  const payment_approved = ["1", 1, "approved", "active"];
  return (
    <div className="row">
      <div className="col-xl-6 col-md-6 mb-4">
        <div
          className="card h-100 py-2 borderbtm1"
        >
          <div className="card-body">
            <div className="align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary  text-uppercase mb-1">
                  Earnings (Total)
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800" style={{color: "rgb(13,110,253)"}}>
                  {/* {currencies && currencies.length > 0
                    ? currencies.map((currency, index) => (
                        <p key={currency + "-" + index}>
                          {currency} :{" "}
                          <b>
                            {sale.reduce(
                              (accumulator, item) =>
                                item.currency !== currency &&
                                rejectedStatus.some(
                                  (status) => status === item.status
                                )
                                  ? accumulator
                                  : (item.commission_amount * 25) / 100 +
                                    accumulator,
                              0
                            )}
                          </b>
                        </p>
                      ))
                    : 0} */}
                  {/* <div className="lineLoader mb-3 w-50"></div> */}
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-md-6 mb-4">
        <div
          className="card h-100 py-2 borderbtm2"
        >
          <div className="card-body">
            <div className="align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                  Earnings (Pending)
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800" style={{color: "#198754"}}>
                  {currencies && currencies.length > 0
                    ? currencies.map((currency, index) => (
                        <p key={currency + "-" + index}>
                          {currency} :{" "}
                          <b>
                            {sale.reduce(
                              (accumulator, item) =>
                                item.currency === currency &&
                                payment_pending.some(
                                  (status) => status === item.status
                                )
                                  ? (item.commission_amount * 25) / 100 +
                                    accumulator
                                  : accumulator,
                              0
                            )}
                          </b>
                        </p>
                      ))
                    : 0}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-md-6 mb-4">
        <div
          className="card h-100 py-2 borderbtm3" style={{ borderBottom: "1px solid rgb(212, 212, 212)"}}
        >
          <div className="card-body">
            <div className="align-items-center">
              <div className="col mr-2">
                <div className=" text-xs font-weight-bold text-uppercase mb-1" style={{color: "rgb(212, 44, 44)" }}>
                  Earnings (Rejected)
                </div>
                <div className="align-items-center">
                  <div className="">
                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800" style={{color: "rgb(212, 44, 44)"}}>
                      {currencies && currencies.length > 0
                        ? currencies.map((currency, index) => (
                            <p key={currency + "-" + index}>
                              {currency} :{" "}
                              <b>
                                {sale.reduce(
                                  (accumulator, item) =>
                                    item.currency === currency &&
                                    rejectedStatus.some(
                                      (status) => status === item.status
                                    )
                                      ? (item.commission_amount * 25) / 100 +
                                        accumulator
                                      : accumulator,
                                  0
                                )}
                              </b>
                            </p>
                          ))
                        : 0}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-md-6 mb-4">
        <div
          className="card h-100 py-2 borderbtm4"
        >
          <div className="card-body">
            <div className="align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                  Total Withdrawable
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800" style={{color: "#ffc107"}}>
                  {currencies && currencies.length > 0
                    ? currencies.map((currency, index) => (
                        <p key={currency + "-" + index}>
                          {currency} :{" "}
                          <b>
                            {sale.reduce(
                              (accumulator, item) =>
                                item.currency === currency &&
                                payment_approved.some(
                                  (status) => status === item.status
                                )
                                  ? (item.commission_amount * 25) / 100 +
                                    accumulator
                                  : accumulator,
                              0
                            )}
                          </b>
                        </p>
                      ))
                    : 0}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {sale && sale.length > 0 && (
        <div className="col-xl-12 col-md-12 mb-4">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="font-weight-bold bg-primary text-white">
                <tr>
                  <td>Date</td>
                  <td>Merchant</td>
                  <td>Amount</td>
                  <td>Cashback Amount</td>
                  <td>Status</td>
                  <td>WithDrawable</td>
                </tr>
              </thead>

              <tbody>
                {sale.map((item, index) => (
                  <tr key={item.commission_id + "-" + index}>
                    <td>{item.date}</td>
                    <td>{item.store}</td>
                    <td>{item.order_amount}</td>
                    <td>{(item.commission_amount * 25) / 100}</td>
                    <td>
                      <span
                        className={
                          approvedStatus.some(
                            (status) => status === item.status
                          )
                            ? "badge badge-success"
                            : rejectedStatus.some(
                                (status) => status === item.status
                              )
                            ? "badge badge-danger"
                            : "badge badge-warning"
                        }
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <span
                        className={
                          payment_approved.some(
                            (status) => status === item.payment_status
                          )
                            ? "badge badge-success"
                            : payment_rejected.some(
                                (status) => status === item.status
                              )
                            ? "badge badge-danger"
                            : "badge badge-warning"
                        }
                      >
                        {item.payment_status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Earn;
