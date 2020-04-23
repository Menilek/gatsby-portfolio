import React from "react"
// import { Link } from "gatsby"

const ImgPhoto = ({ content }) => {
    return (
    // <Link to={`/content/${content.name}`} className="uk-link-reset">
        <div className="uk-card uk-card-muted">
            <div className="uk-card-media-top" uk-scrollspy="cls: uk-animation-fade">
                <a href={content} className="uk-inline">
                    <img
                        src={content}
                        alt={content}
                        height="100"
                    />
                </a>
            </div>
        </div>
    // </Link>
    )
}

export default ImgPhoto
