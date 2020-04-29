import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import SEO from "./seo"
import NavBar from "./navBar" 
// import Header from "./header"
// import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <NavBar />
        <main>{children}</main>
      <main id="MainContent" uk-height-viewport="expand: true">
        <a href="#" uk-icon="icon: vimeo"></a>
        <a href="https://www.instagram.com/mikaels_album/" uk-icon="icon: instagram"></a>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
