import React from "react"

import Layout from "../components/layout"
import Contact from "../components/contact"
import contactStyle from "./contact.module.scss"

import Head from "../components/head"

const contactUs = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1 className={contactStyle.center}>Let's get started!!!</h1>

      <Contact />
      <p className={contactStyle.center} style={{ fontSize: "30px" }}>
        You can check me out on twitter @
        <a href="https://twitter.com/TeeDrumz1">Tee</a>
      </p>
    </Layout>
  )
}

export default contactUs
