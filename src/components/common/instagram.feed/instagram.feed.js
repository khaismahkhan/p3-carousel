import React from 'react'
import { Typography } from '@mui/material'
const InstagramFeed = (props) => {
    const { backgroundimage, backgroundcolor, message, brandtag, logoalignment, ZLheight, ZLwidth } = props
    return (
        <div
            className="w-100 h-100 "
            style={{
                backgroundImage: backgroundimage ? `url(${backgroundimage})` : "",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: backgroundcolor ? backgroundcolor : ""
            }}
        >
            <div className="d-flex justify-content-end p-2 h-20 w-100">
                <div className="h-100 w-25">
                    <img className="w-100 h-100" src={brandtag ? brandtag : null} />
                </div>
            </div>
            <div className="d-flex align-items-center text-center p-1 w-100 h-50">
                <Typography variant="body2" component="div" className="text-uppercase text-ellipsis-clamp-3 text-white ">
                    {message ? message : null}
                </Typography>
            </div>
            <div className="d-flex pb-1 p-1 h-20 w-100"
                style={{ justifyContent: logoalignment ? logoalignment : "center" }}
            >
                <div style={{ width: ZLwidth ? ZLwidth : "20%", height: ZLheight ? ZLheight : "100%", }}>
                    <img src="https://zapp.world/assets/images/zapp-logo.svg" className="h-100 w-100" />
                </div>
            </div>
        </div>
    )
}

export default InstagramFeed
