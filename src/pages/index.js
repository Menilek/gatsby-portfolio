import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Feature from "../components/feature"

import "../assets/main.css"
import featureImg from "../assets/street.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="uk-section">
        <div className="uk-container uk-container-large uk-cover-container">
          <Feature content={featureImg}/>
        </div>
    </div>
  </Layout>
)

export default IndexPage
