import React from "react"

const CardVideo = (link, callback, titulo) => {

    return (
        <div className="box-pagina-principal" onClick={callback}>
            <img src={link} alt="" />
            <h4>{titulo}</h4>
        </div>
    )
}

export default CardVideo;