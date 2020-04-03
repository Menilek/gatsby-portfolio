import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Feature from "../components/feature"
import featureImg from "../assets/squint.jpg"

const About = () => (
    <Layout>
    <SEO title="About"/>
        <div className="uk-section">
            <div className="uk-container uk-container-large">
                <div>
                    <Feature content ={featureImg}/>
                    <div>
                        <div className="uk-card uk-card-muted">
                            <div className="uk-card-media-top">
                                <p>Mikael is based in Bristol, England</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default About;
