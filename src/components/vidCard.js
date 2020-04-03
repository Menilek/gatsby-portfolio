import React from "react"

const VidCard = ({ src, allow, vidWidth, vidHeight }) => {

    return (
        <div>
            <div className="uk-width-expand" data-uk-grid>
                <div className="uk-align-center">
                    <div className="uk-card uk-card-muted">
                        <div className="uk-card-media-top">
                            <iframe
                                src={src}
                                controls="0"
                                frameborder="0"
                                title="Boys Like Us: A Short Film"
                                allow={allow}
                                width={vidWidth}
                                height={vidHeight}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VidCard