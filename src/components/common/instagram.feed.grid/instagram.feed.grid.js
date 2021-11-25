import React from 'react'
import InstagramFeed from '../instagram.feed/instagram.feed'
import { Box, Grid } from '@mui/material'
const InstagramFeedGrid = () => {

    return (
        <Box className="h-100 w-100">
            <Grid
                container
                sx={{ height: "180px" }}
                className="w-100 justify-content-center"
            >
                <Grid item lg={1.714} md={1.714} sm={3} xs={6} className="h-100 w-100 paper-root" >
                    <InstagramFeed backgroundimage="https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?size=626&ext=jpg" brandtag="https://upload.wikimedia.org/wikipedia/commons/0/08/Magnolia_dairy_logo.png" />
                </Grid>
                <Grid item lg={1.714} md={1.714} sm={3} xs={6} className="h-100 w-100 paper-root" >
                    <InstagramFeed message="50% Sale on alkaram branded suits" backgroundcolor="#02cecc" />

                </Grid>
                <Grid item lg={1.714} md={1.714} sm={3} xs={6} className="h-100 w-100 paper-root" >
                    <InstagramFeed backgroundimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4amixx-a1OUKEFEnIwx8zsJZjbrrU_WO7cwMdpk5Ps9XiUlExXG-OvE0ijv4rtaIc6LQ&usqp=CAU" logoalignment="left" ZLwidth="100px" ZLheight="30px" brandtag="https://nation.com.pk/digital_images/medium/2019-06-04/khaadi-hosts-three-day-long-eid-celebrations-at-flagship-store-1559646846-3890.jpg " />

                </Grid>
                <Grid item lg={1.714} md={1.714} sm={3} xs={6} className="h-100 w-100 paper-root" >
                    <InstagramFeed backgroundimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiofWkXC7TUsayo84oEeWPAxP0KdoPn-flei1fErImKsUZHjhLtnRe-JOUqjU9_jugFfY&usqp=CAU" brandtag="https://e7.pngegg.com/pngimages/306/228/png-clipart-bahria-town-karachi-alkaram-studio-alkaram-textile-mills-retail-brand-chappal-text-retail.png" />
                </Grid>
                <Grid item lg={1.714} md={1.714} sm={3} xs={6} className="h-100 w-100 paper-root" >
                    <InstagramFeed message="when i say it order online,it only mean order with zapp it" backgroundcolor="purple" />

                </Grid>
                <Grid item lg={1.714} md={1.714} sm={3} xs={6} className="h-100 w-100 paper-root" >
                    <InstagramFeed backgroundimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCzQj8_uvohTufH2MOqDbpB5If6Gu3q7SD3Uopc1vdd-71xLhfSV8ODWU5hp2KQ2tiNek&usqp=CAU" brandtag="https://upload.wikimedia.org/wikipedia/commons/b/b4/Zellbury_logo.png" logoalignment="right" ZLwidth="100px" ZLheight="35px" />

                </Grid>
                <Grid item lg={1.714} md={1.714} sm={3} xs={6} className="h-100 w-100 paper-root" >
                    <InstagramFeed message="stay home order online" backgroundcolor="pink" brandtag="https://zapp.world/assets/images/zapp-logo.svg" />
                </Grid>
            </Grid>

        </Box>
    )
}

export default InstagramFeedGrid
