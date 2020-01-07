import React from "react"
import bootstrap from "../components/bootstrap.min.css"
import Logo from "../images/profile.jpg"

import indexStyles from "../pages/index.module.scss"

export default function Project() {
  return (
    <section>
      <div className="row mt-0">
        <div className="col-md-6 col-sm-6 col-10 mt-5 mx-auto">
          <div className="card" style={{ minHeight: "100%" }}>
            <img
              src={Logo}
              alt="Tee"
              style={{
                maxWidth: "100%",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">card title</h5>
              <p className="card-text">some text</p>
              <a href="#" className="btn btn-primary">
                view
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-10 mt-5 mx-auto">
          <div className="card">
            <img
              src={Logo}
              alt="Tee"
              style={{
                maxWidth: "100%",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">card title</h5>
              <p className="card-text">some text</p>
              <a href="#" className="btn btn-primary">
                view
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-10 mt-5 mx-auto">
          <div className="card">
            <img
              src={Logo}
              alt="Tee"
              style={{
                maxWidth: "100%",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">card title</h5>
              <p className="card-text">some text</p>
              <a href="#" className="btn btn-primary">
                view
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-10 mt-5 mx-auto">
          <div className="card">
            <img
              src={Logo}
              alt="Tee"
              style={{
                maxWidth: "100%",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">card title</h5>
              <p className="card-text">some text</p>
              <a href="#" className="btn btn-primary">
                view
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
