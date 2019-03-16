import React, { Component } from "react";
import Togglebar from "./Togglebar";

const Navbar = props => (
  <div className="header">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <Togglebar click={props.isToggleOn} />
          {/* <!-- <div className="float-none">
                                <div className="logo"><a href="index.html">
                                        <span>TeacupExplorer</span></a></div>
                        </div> --> */}
          <div className="float-right">
            <ul>
              <li className="header-icon dib">
                <i className="ti-bell" />
                <div className="drop-down">
                  <div className="dropdown-content-heading">
                    <span className="text-left">Recent Notifications</span>
                  </div>
                  <div className="dropdown-content-body">
                    <ul>
                      <li>
                        <a href="#">
                          <img
                            className="pull-left m-r-10 avatar-img"
                            src="assets/images/avatar/3.jpg"
                            alt=""
                          />
                          <div className="notification-content">
                            <small className="notification-timestamp pull-right">
                              02:34 PM
                            </small>
                            <div className="notification-heading">Mr. John</div>
                            <div className="notification-text">
                              5 members joined today{" "}
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="pull-left m-r-10 avatar-img"
                            src="assets/images/avatar/3.jpg"
                            alt=""
                          />
                          <div className="notification-content">
                            <small className="notification-timestamp pull-right">
                              02:34 PM
                            </small>
                            <div className="notification-heading">Mariam</div>
                            <div className="notification-text">
                              likes a photo of you
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="pull-left m-r-10 avatar-img"
                            src="assets/images/avatar/3.jpg"
                            alt=""
                          />
                          <div className="notification-content">
                            <small className="notification-timestamp pull-right">
                              02:34 PM
                            </small>
                            <div className="notification-heading">Tasnim</div>
                            <div className="notification-text">
                              Hi Teddy, Just wanted to let you ...
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="pull-left m-r-10 avatar-img"
                            src="assets/images/avatar/3.jpg"
                            alt=""
                          />
                          <div className="notification-content">
                            <small className="notification-timestamp pull-right">
                              02:34 PM
                            </small>
                            <div className="notification-heading">Mr. John</div>
                            <div className="notification-text">
                              Hi Teddy, Just wanted to let you ...
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="text-center">
                        <a href="#" className="more-link">
                          See All
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="header-icon dib">
                <span className="user-avatar">
                  John <i className="ti-angle-down f-s-10" />
                </span>
                <div className="drop-down dropdown-profile">
                  <div className="dropdown-content-heading">
                    <span className="text-left">Upgrade Now</span>
                    <p className="trial-day">30 Days Trail</p>
                  </div>
                  <div className="dropdown-content-body">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-user" /> <span>Profile</span>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <i className="ti-email" /> <span>Inbox</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-settings" /> <span>Setting</span>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <i className="ti-lock" /> <span>Lock Screen</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-power-off" /> <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Navbar;
