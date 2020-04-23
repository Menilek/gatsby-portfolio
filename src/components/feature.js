import React from "react"
import ImgCard from "./imgCard"

const Feature = ({ content }) => {

    return (
        <div>
            <div className="uk-child-width-1-2" data-uk-grid>
                <div className="uk-align-center">
                    <ImgCard content={content} />
                </div>
            </div>
        </div>
    )
}

export default Feature
