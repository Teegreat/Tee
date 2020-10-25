import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import aboutStyle from "./about.module.scss"
import Layout from "../components/layout"
import indexStyles from "./index.module.scss"

import Head from "../components/head"

export const query = graphql`
  query {
    file(relativePath: { eq: "images/tteeee.png" }) {
      childImageSharp {
        fixed(width: 150, quality: 100) {
          src
        }
      }
    }
  }
`

const aboutPage = props => {
  const profilePicture = (
    <div
      style={{
        textAlign: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <img
        src={props.data.file.childImageSharp.fixed.src}
        alt="Tee the freelancer"
        className={aboutStyle.profilePicture}
      />
    </div>
  )
  return (
    <Layout>
      <Head title="About Me" />
      {/* <h1 style={{ marginBottom: "1rem" }}>About Me</h1> */}
      <div style={{ justifyContent: "center" }}>{profilePicture}</div>
      <p style={{ marginTop: "1rem", fontSize: "20px" }}>
        I'm a Self taught front-end web developer based in Abuja, Nigeria. I do
        work remotely for both local and international clients.
      </p>
      <p style={{ fontSize: "20px" }}>
        I build websites for my clients using Reactjs (Gatsby) and WordPress.
        Also, if you want full branding for your startup business or want to
        take your business to the next level I am very much available to help
        you achieve your goals.
      </p>
      <p
        style={{
          fontSize: "20px",
        }}
      >
        <Link
          style={{
            color: "#FE5B55",
          }}
          to="/contact"
        >
          Want to work with me? Reach out
        </Link>
      </p>

      <br />
      <br />
      <br />
      <hr
        style={{
          backgroundImage:
            "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
          height: ".1rem",
        }}
      />
      <br />
      <br />
      <h1>Why Work With Me</h1>
      <p style={{ fontSize: "20px" }}>
        If there's one thing I love doing, is developing good websites for my
        clients to give them a unique online presence and help them drive sales
        to their business.
      </p>
      <p style={{ fontSize: "20px" }}>
        I've spent many years trying to be perfect at what I do, and while I'll
        never be perfect, I do my very best to give you the best.
      </p>
      <p style={{ fontSize: "20px" }}>Want to work with me?</p>
      <button className={indexStyles.button}>
        <Link
          className={indexStyles.button}
          style={{ textDecoration: "none" }}
          to="/contact"
        >
          Let's Talk !
        </Link>
      </button>
    </Layout>
  )
}

export default aboutPage
