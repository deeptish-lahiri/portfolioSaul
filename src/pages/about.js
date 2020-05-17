import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello 👋</h1>
    <p>
      I am a Senior User Experience Designer with over 4 years of experience,
      skilled at product strategy and user research.
    </p>
    <p>
      I like to address business goals by understanding user needs using rapid
      research techniques, value proposition testing, competitor analysis,
      journey maps, prototyping and usability tests.
    </p>
    <p>
      I have perspective and experience in managing a small design team and
      moderating design sprints to tackle complex product problems and create
      feasible and viable business solutions.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Link to="/lazypay/">Go to page 2</Link>
  </Layout>
)

export default About
