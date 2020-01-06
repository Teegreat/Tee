import React from "react"

import Layout from "../components/layout"
import Contact from "../components/contact"
import contactStyle from "./contact.module.scss"

import Head from "../components/head"

const contactUs = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1 className={contactStyle.center}>Please Leave a Message</h1>

      <Contact />
    </Layout>
  )
}

export default contactUs
