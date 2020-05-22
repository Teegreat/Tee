import React from "react"

import Layout from "../components/layout"
import Contact from "../components/contact"
import contactStyle from "./contact.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"

import Head from "../components/head"

const contactUs = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <Contact />

      <div className={contactStyle.icons}>
        <a href="https://twitter.com/TeeGreat" class={contactStyle.iconLink}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>

        <a href="https://github.com/Teegreat/" class={contactStyle.iconLink}>
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a href=" https://wa.me/2348147982710" class={contactStyle.iconLink}>
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>

        <a
          href="https://www.linkedin.com/in/toyin-atofarati-0a1687152/"
          class={contactStyle.iconLink}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </Layout>
  )
}

export default contactUs
