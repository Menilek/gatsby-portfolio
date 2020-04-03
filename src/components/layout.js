import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import SEO from "./seo"
import Nav from "./nav" 
// import Header from "./header"
// import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Nav />
        <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
