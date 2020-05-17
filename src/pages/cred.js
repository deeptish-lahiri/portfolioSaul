import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CREDBanner from "../components/CREDBanner"
import ProjectInsight from "../components/projectInsight"
import ProjectArticleCenter from "../components/projectArticleCenter"

const Cred = () => (
  <Layout>
    <SEO title="Page two" />
    <Link to="/">Go back to the homepage</Link>
    <CREDBanner />
    <ProjectArticleCenter />
    <ProjectInsight />
  </Layout>
)

export default Cred
