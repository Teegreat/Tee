import React from "react"
import bootstrap from "../components/bootstrap.min.css"
import indexStyles from "../pages/index.module.scss"

export default function Contact() {
  return (
    <section className="contact py-5">
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/teewebby64@gmail.com"
            method="POST"
          >
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Tee"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="email@gmail.com"
              />
            </div>
            {/* description */}
            <div className="form-group">
              <label htmlFor="description">Message</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
                placeholder="How can I be of help ?"
              ></textarea>
            </div>
            {/* submit */}
            <button className={indexStyles.button}>Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
