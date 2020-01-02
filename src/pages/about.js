import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const aboutPage = () => {
  return (
    <Layout>
      <Head title="About Me" />
      <h1>About Me</h1>
      <p>Self taught developer with great passion for web development.</p>
      <p>
        <Link to="/contact">Want to work with me? Reach out</Link>
      </p>
    </Layout>
  )
}

export default aboutPage
