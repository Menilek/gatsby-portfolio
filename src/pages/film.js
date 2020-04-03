import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VidCard from "../components/vidCard"

const vidURL = "https://www.youtube-nocookie.com/embed/iBHqIe-WYDM"
const allowPolicy = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
const vidWidth = "560"
const vidHeight = "315"

const Film = () => (
    <Layout>
    <SEO title="Film"/>
        <div className="uk-section">
            <div className="uk-container uk-container-large">
                <div>
                    <VidCard src={vidURL} allow={allowPolicy} vidWidth={vidWidth} vidHeight={vidHeight} />
                </div>
            </div>
        </div>
    </Layout>
)

export default Film;
