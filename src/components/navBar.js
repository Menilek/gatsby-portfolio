import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"

class NavBar extends Component {

    toggleMenu = () => {
        // let navbarToggle = document.getElementById("navbar-toggle");
        document.getElementById("navbar-toggle").classList.toggle("navbar-invisible");
        console.log('CLICK')
    }

    render() {
        return (
            <div>
                <div>
                    <nav className="uk-navbar" data-uk-navbar>
                        <div className="uk-navbar-left">
                            <ul className="uk-navbar-nav">
                                <li>
                                    <a className=" uk-navbar-toggle navbar-invisible" id="navbar-toggle" onClick={this.toggleMenu}>
                                        <h5 className="heading-link nav-menu">Menu</h5>
                                    </a>
                                    <Link to="/"><h2 className="heading-link uk-text-bold">MikaelTechane</h2></Link>
                                </li>
                            </ul>
                        </div>

            <div className="navbar-collapse" id="navbar-collapse">
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
    }
}

export default NavBar;