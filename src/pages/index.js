import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import Typist from "react-typist"
import indexStyles from "./index.module.scss"

const HomePage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1 style={{ color: "#655757" }}>
        <Typist avgTypingDelay={130} stdTypingDelay={30}>
          <span>Web Consultant...</span>
          <Typist.Backspace count={17} delay={2000} />
          <span>Web Developer...</span>
          <Typist.Backspace count={22} delay={2000} />
          <span>WordPress Expert...</span>
        </Typist>
      </h1>

      <h2 style={{ marginTop: "2.5rem" }}>Hello there!</h2>
      <h3 style={{ lineHeight: "1.5" }}>
        I'm Tee and I specialize in building websites that help businesses excel
        online.
      </h3>

      <p style={{ lineHeight: "1.5" }}>
        If you are a business owner seeking an online presence or in need of a
        web developer, please feel free to contact me{" "}
        <Link to="/contact">here</Link>.
      </p>
      <button className={indexStyles.button}>
        <Link
          className={indexStyles.button}
          style={{ textDecoration: "none" }}
          to="/contact"
        >
          Hire Me
        </Link>
      </button>
    </Layout>
  )
}

export default HomePage
