import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImgCard from "../components/imgCard"

import thumb from "../assets/thumb.jpg"

// const vidURL = "https://www.youtube-nocookie.com/embed/iBHqIe-WYDM"
// const allowPolicy = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
// const vidWidth = "560"
// const vidHeight = "315"

const Narrative = () => (
    <Layout>
    <SEO title="Film"/>
        <div className="uk-section">
            <div className="uk-container uk-container-large">
                <div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid="masonry: true">
                    <div>
                        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle mt-card" height="100px">
                            <ImgCard content={thumb} />
                            <div class="uk-overlay uk-position-center">
                                <h5 className="heading-link uk-text-capitalize">Boys Like Us - 2019</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default Narrative;
