import React from "react"
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
      <h2>I'm Tee and I derive joy in building websites that rocks!!!</h2>
    </Layout>
  )
}

export default HomePage
