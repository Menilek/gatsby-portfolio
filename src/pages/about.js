import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Feature from "../components/feature"
// import featureImg from "../assets/about.jpg"

const About = () => (
    <Layout>
    <SEO title="About"/>
        <div className="uk-section">
            <div className="uk-container uk-container-large">
                <div className="uk-child-width-1-2" data-uk-grid>
                    <div className="uk-align-center">
                        <div>
                            <div>
                                <div className="uk-card uk-card-muted">
                                    <div className="uk-card-media-top">
                                        <p className="mt-body-text">Born in the north and raised in the south of Britain, Mikael Techane is a Jamaican-Ethiopian filmmaker and photographer based out of Bristol.</p>
                                        <p className="mt-body-text">Inspired by the intersections of identity, environment and culture within society, Mikael creates works of insight and empathy to champion the voices of those around him.</p>
                                        <p className="mt-body-text">His work has been featured on platforms such as Tate Britain, BFI Southbank Centre and BBC Inside Out West amongst others.</p>
                                    </div>
                                    <hr/>
                                    <div>
                                        <h3 className="heading-link">Enquiries</h3>
                                        <span className="mt-body-text">Email: <a className="mt-link mt-body-text" href="mailto:mikaeltechane@gmail.com">mikaeltechane@gmail.com</a> </span>
                                        <br />
                                        <br />
                                        <span className="mt-body-text">Instagram: <a className="mt-link mt-body-text" href="https://www.instagram.com/mikaels_album/">mikaels_dvr</a> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default About;
