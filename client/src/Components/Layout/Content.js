import React, { Component } from "react";

export class Content extends Component {
  render() {
    return (
      <div>
        <div className="content-wrap">
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-8 p-r-0 title-margin-right">
                  <div className="page-header">
                    <div className="page-title">
                      <h1>
                        Hello, <span>Welcome Here</span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 p-l-0 title-margin-left">
                  <div className="page-header">
                    <div className="page-title">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="/">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">Home</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <section id="main-content">
                <div className="container">
                  <div className="row">
                    <div class="col-sm-4">
                      <i class="fa fa-folder  fa-2x" aria-hidden="true">
                        <p className="text">folder2</p>
                      </i>
                    </div>
                    <div class="col-sm-4">
                      <i class="fa fa-folder fa-2x" aria-hidden="true">
                        <p className="text">folder2</p>
                      </i>
                    </div>
                    <div class="col-sm-4">
                      <i class="fa fa-folder  fa-2x" aria-hidden="true">
                        <p className="text">folder2</p>
                      </i>
                    </div>
                    <div class="col-sm-4">
                      <i class="fa fa-folder  fa-2x" aria-hidden="true">
                        <p className="text">folder2</p>
                      </i>
                    </div>
                    <div class="col-sm-4">
                      <i class="fa fa-folder  fa-2x" aria-hidden="true">
                        <p className="text">folder2</p>
                      </i>
                    </div>
                    <div class="col-sm-4">
                      <i class="fa fa-folder " aria-hidden="true">
                        <p className="text">folder2</p>
                      </i>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
