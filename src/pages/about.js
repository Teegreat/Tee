import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import aboutStyle from "./about.module.scss"
import Layout from "../components/layout"
import indexStyles from "./index.module.scss"

import Head from "../components/head"

export const query = graphql`
  query {
    file(relativePath: { eq: "images/profile.jpg" }) {
      childImageSharp {
        fixed(width: 150) {
          src
        }
      }
    }
  }
`

const aboutPage = props => {
  const profilePicture = (
    <img
      src={props.data.file.childImageSharp.fixed.src}
      alt=""
      className={aboutStyle.profilePicture}
    />
  )
  return (
    <Layout>
      <Head title="About Me" />
      <h1>About Me</h1>
      <div>{profilePicture}</div>
      <p>
        I'm a Self taught front-end web developer based in Abuja, Nigeria. I do
        work remotely for both local and international clients.
      </p>
      <p>
        <Link to="/contact">Want to work with me? Reach out</Link>
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
      <p>
        If there's one thing I love doing, is developing good websites for my
        clients to give them a unique online presence.
      </p>
      <p>
        I've spent many years trying to be perfect at what I do, and while I'll
        never be perfect, I do my very best to give you the best.
      </p>
      <p>Want to work with me?</p>
      <button className={indexStyles.button}>
        <Link className={indexStyles.button} to="/contact">
          Let's Talk !
        </Link>
      </button>
    </Layout>
  )
}

export default aboutPage
