import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import Typist from "react-typist"

const HomePage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>
        <Typist avgTypingDelay={130} stdTypingDelay={30}>
          <span>Web Consultant...</span>
          <Typist.Backspace count={17} delay={3000} />
          <span>Web Developer...</span>
          <Typist.Backspace count={22} delay={3000} />
          <span>WordPress Developer</span>
        </Typist>
      </h1>

      <h2 style={{ marginTop: "2.5rem" }}>Hello there!</h2>
      <h3>
        I'm Tee and I specialize in building websites that help businesses excel
        online.
      </h3>

      <p>
        If you are a business owner seeking an online presence or in need of a
        web developer, please feel free to contact me here.
      </p>
    </Layout>
  )
}

export default HomePage
