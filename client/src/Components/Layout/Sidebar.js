import React, { Component } from "react";
class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
          <div className="nano">
            <div className="nano-content">
              <div className="logo">
                <a href="index.html">
                  <span>TeacupExplorer</span>
                </a>
              </div>
              <ul>
                <li className="label">Main</li>
                <li className="active">
                  <a className="sidebar-sub-toggle">
                    <i className="ti-home" /> Dashboard{" "}
                    <span className="badge badge-primary">2</span>{" "}
                    <span className="sidebar-collapse-icon ti-angle-down" />
                  </a>
                  <ul>
                    <li>
                      <a href="index.html">Dashboard 1</a>
                    </li>
                    <li>
                      <a href="index1.html">Dashboard 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="sidebar-sub-toggle">
                    <i className="ti-bar-chart-alt" /> Charts{" "}
                  </a>
                </li>
                <li>
                  <a href="app-event-calender.html">
                    <i className="ti-calendar" /> Calender{" "}
                  </a>
                </li>
                <li>
                  <a href="app-email.html">
                    <i className="ti-email" /> Email
                  </a>
                </li>
                <li>
                  <a href="app-profile.html">
                    <i className="ti-user" /> Profile
                  </a>
                </li>
                <li>
                  <a href="app-widget-card.html">
                    <i className="ti-layout-grid2-alt" /> Widget
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
