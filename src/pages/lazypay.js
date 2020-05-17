import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LPBanner from "../components/LPBanner"
import ProjectInsight from "../components/projectInsight"
import ProjectArticleCenter from "../components/projectArticleCenter"

const Lazypay = () => (
  <Layout>
    <SEO title="Page two" />
    <Link to="/">Go back to the homepage</Link>
    <LPBanner />
    <ProjectArticleCenter />
    <ProjectInsight />
  </Layout>
)

export default Lazypay
