import React from 'react'
import { Box, Typography, IconButton } from '@mui/material';
import { useStyle } from '../saleitembox/sale.item.box.style';
import './sale.item.box.scss';
import { IsMobileWidth } from '../../../util';
import clsx from 'clsx'
export const SaleItemBox = (props) => {
    const classes = useStyle()
    const { tag, title, description, image, width, height } = props
    const mobileWidth = IsMobileWidth()

    return (

        <div className="W-100 h-100"
            style={{
                backgroundImage: image ? `url(${image})` : "url(https://us.123rf.com/450wm/semilyon/semilyon2007/semilyon200700011/151133655-red-female-glossy-leather-bag-isolated-on-white-background.jpg?ver=6)",
                backgroundSize: width && height ? `${width} ${height}` : width ? `${width} 100%` : height ? `100% ${height}` : "100% 100%",
                backgroundRepeat: "no-repeat",

            }}
        >
            <Box
                sx={{ height: "500px" }}
                classes={{
                    root: classes.card_background_image
                }}
                className="paper-root2  w-100"
            >
                <div className="d-flex flex-column align-items-between justify-content-between h-100">
                    <div className={clsx(!mobileWidth && "d-flex justify-content-between p-3 pt-4", mobileWidth && "d-flex justify-content-between p-2 pt-3")}>
                        <Typography variant="subtitle2" className={tag ? clsx(!mobileWidth && `text-white tag-bg-color p-1 pl-2 pr-2 text-uppercase font-weight-bold mt-1`, mobileWidth && "text-white tag-size p-1 text-uppercase mt-1") : ""} >
                            {tag}
                        </Typography>
                        <IconButton className="p-0">
                            <span className={clsx(!mobileWidth && "material-icons paper-root2 border-radius-100 like_btn p-2", mobileWidth && "material-icons paper-root2 border-radius-100 like_btn-size p-1")}>
                                favorite_border_outlined_icon
                            </span>
                        </IconButton>
                    </div>
                    <div className="p-4">
                        <span className="text-ellipsis-clamp-1 font-weight-bold text-uppercase">
                            {title ? title : ""}
                        </span>
                        <div className="text-ellipsis-clamp-1 text-capitalize">
                            {description ? description : ""}
                        </div>
                    </div>
                </div>
            </Box >
        </div >
    )
}
export default SaleItemBox