import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const Nav = () => (
  <div>
    <div>
      <nav className="uk-navbar" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/"><h2 className="heading-link uk-text-bold">MikaelTechane</h2></Link>
            </li>
          </ul>
        </div>

        <div className="uk-navbar-center">
          <ul className="uk-navbar-nav">
            <StaticQuery
              query={graphql`
                query {
                  site {
                    siteMetadata {
                      menuLinks {
                        name
                        link
                      }
                    }
                  }
                }
              `}
              render={data =>
                data.site.siteMetadata.menuLinks.map((site, i) => {
                  return (
                    <li key={site.name}>
                      <Link to={`/${site.link}`}>
                        <h5 className="heading-link uk-text-capitalize">{site.name}</h5>
                      </Link>
                    </li>
                  )
                })
              }
            />
          </ul>
        </div>
      </nav>
    </div>
  </div>
)

export default Nav
