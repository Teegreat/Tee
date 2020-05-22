import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Projects from "../components/project"
import Head from "../components/head"

const aboutPage = () => {
  return (
    <Layout>
      <Head title="Projects" />
      {/* <h1>Projects</h1> */}

      <Projects />
      <p style={{ margin: "3rem", textAlign: "center" }}>
        <Link
          style={{
            color: "#FE5B55",
          }}
          to="/contact"
        >
          Want to work with me? Reach out
        </Link>
      </p>
    </Layout>
  )
}

export default aboutPage
