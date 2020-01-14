import React from "react"
import bootstrap from "../components/bootstrap.min.css"
import Logo from "../images/coming-soon.jpg"
import Redemption from "../images/redemption-blog.png"
import Eggsfertility from "../images/eggsfertitlity.png"
import Zuma from "../images/zuma-publishing.png"

import indexStyles from "../pages/index.module.scss"

export default function Project() {
  return (
    <section>
      <div className="row mt-0">
        <div className="col-md-6 col-sm-6 col-10 mt-5 mx-auto">
          <div className="card" style={{ minHeight: "100%" }}>
            <img
              src={Redemption}
              alt="Redemption Blog"
              style={{
                maxWidth: "100%",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">Redemption Blog</h5>
              {/* <p className="card-text">some text</p> */}
              <button
                className={indexStyles.button}
                style={{ marginTop: "2rem" }}
              >
                <a
                  href="http://redemptionblog.netlify.com/"
                  className={indexStyles.button}
                  style={{ textDecoration: "none" }}
                >
                  View
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-10 mt-5 mx-auto">
          <div className="card">
            <img
              src={Eggsfertility}
              alt="Eggs fertility support network"
              style={{
                maxWidth: "100%",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">Eggs Fertility Support Network</h5>
              {/* <p className="card-text">some text</p> */}
              <button
                className={indexStyles.button}
                style={{ marginTop: "1rem" }}
              >
                <a
                  href="https://www.eggsfertilitysupnet.com/"
                  className={indexStyles.button}
                  style={{ textDecoration: "none" }}
                >
                  View
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-10 mt-5 mx-auto">
          <div className="card">
            <img
              src={Zuma}
              alt="Zuma publishing"
              style={{
                maxWidth: "100%",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">Zuma Publishing</h5>
              {/* <p className="card-text">some text</p> */}
              <button
                className={indexStyles.button}
                style={{ marginTop: "1rem" }}
              >
                <a
                  href="https://zumapublishing.com/"
                  className={indexStyles.button}
                  style={{ textDecoration: "none" }}
                >
                  View
                </a>
              </button>
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
              <h5 className="card-title">coming Soon</h5>
              {/* <p className="card-text">some text</p> */}
              <button
                className={indexStyles.button}
                style={{ marginTop: "1rem" }}
              >
                <a
                  href="#"
                  className={indexStyles.button}
                  style={{ textDecoration: "none" }}
                >
                  View
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
