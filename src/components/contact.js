import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import "./contactform.css"

import bootstrap from "../components/bootstrap.min.css"
import indexStyles from "../pages/index.module.scss"

export default function Contact() {
  return (
    // <section className="contact ">
    //   <div className=" row">
    //     <div className=" col-sm-8 col-md-6 mx-auto ">
    //       <form
    //         action="https://formspree.io/teewebby64@gmail.com"
    //         method="POST"
    //       >
    //         {/* name */}
    //         <div className="form-group">
    //           <label htmlFor="name">Name</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             name="name"
    //             id="name"
    //             placeholder="Name"
    //           />
    //         </div>
    //         {/* email */}
    //         <div className="form-group">
    //           <label htmlFor="email">Email</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             name="email"
    //             id="email"
    //             placeholder="email@gmail.com"
    //           />
    //         </div>
    //         {/* description */}
    //         <div className="form-group">
    //           <label htmlFor="description">Message</label>
    //           <textarea
    //             name="description"
    //             id="description"
    //             className="form-control"
    //             rows="5"
    //             placeholder="How can I be of help ?"
    //           ></textarea>
    //         </div>
    //         {/* submit */}
    //         <button className={indexStyles.button}>Send</button>
    //       </form>
    //     </div>
    //   </div>
    // </section>

    <div id="contact-form">
      <div>
        <h4 style={{ padding: "10px" }}>
          Have a question or just want to get in touch? I would love to hear
          from you.
        </h4>
      </div>
      <form method="post" action="https://formspree.io/teewebby64@gmail.com">
        <div>
          <label for="name">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              autofocus="autofocus"
            />
          </label>
        </div>
        <div>
          <label for="email">
            <input type="email" name="email" placeholder="Your Email" />
          </label>
        </div>
        <div>
          <label for="message">
            <textarea
              name="message"
              placeholder="Tell me about it....."
            ></textarea>
          </label>
        </div>
        <div>
          <button type="submit">SEND</button>
        </div>
      </form>
    </div>
  )
}
