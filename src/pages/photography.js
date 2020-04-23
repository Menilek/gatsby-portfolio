import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ImgPhoto from "../components/imgPhoto"
import fasika from "../assets/Fasika.jpg"
import carni from "../assets/carni1.jpg"
import lights from "../assets/lights.jpg"
import Lily from "../assets/Lily.jpg"
import poppy from "../assets/poppy.jpg"
import shadows from "../assets/shadows.jpg"
import street from "../assets/street.jpg"
import washing from "../assets/washing.jpg"

const Photography = () => (
    <Layout>
    <SEO title="Photography"/>
        <div className="uk-section">
            <div className="uk-container uk-container-large">
                <div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid="masonry: true" uk-lightbox="animation: slide">
                    <div>
                        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-first-column mt-card">
                            <ImgPhoto content={fasika} />
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle mt-card">
                            <ImgPhoto content={washing} />
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle mt-card">
                            <ImgPhoto content={street} />
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle uk-first-column mt-card">
                            <ImgPhoto content={poppy} />
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle mt-card">
                            <ImgPhoto content={shadows} />
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle mt-card">
                            <ImgPhoto content={carni} />
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle mt-card">
                            <ImgPhoto content={Lily} />
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle mt-card">
                            <ImgPhoto content={lights} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default Photography;
