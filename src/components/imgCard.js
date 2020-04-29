import React from "react"
// import { Link } from "gatsby"
import Img from "gatsby-image"

const ImgCard = ({ content }) => {
    return (
    // <Link to={`/content/${content.name}`} className="uk-link-reset">
        <div className="uk-card uk-card-muted">
            <div className="uk-card-media-top" uk-scrollspy="cls: uk-animation-fade">
                <Img
                    className={content}
                />
                <img
                    src={content}
                    alt={content}
                    
                />
            </div>
        </div>
    // </Link>
    )
}

export default ImgCard
