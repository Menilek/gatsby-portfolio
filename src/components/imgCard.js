import React from "react"
// import { Link } from "gatsby"

const ImgCard = ({ content }) => {
    return (
    // <Link to={`/content/${content.name}`} className="uk-link-reset">
        <div className="uk-card uk-card-muted">
            <div className="uk-card-media-top">
                <img
                    src={content}
                    alt={content}
                    height="100"
                />
            </div>
        </div>
    // </Link>
    )
}

export default ImgCard
