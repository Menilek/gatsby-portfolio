import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../assets/main.css"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "street.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="uk-section">
        <div className="uk-container uk-container-large uk-cover-container">
          <div className="uk-child-width-1-2" data-uk-grid>
            <div className="uk-align-center">
              <div className="uk-card uk-card-muted">
                <div className="uk-card-media-top" uk-scrollspy="cls: uk-animation-fade">
                  <Img
                    fluid={data.file.childImageSharp.fluid}
                    alt="A dim street dotted with figures under illuminated by traffic lights"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </Layout>
  )
}
