import { Container } from '@mui/material'
import Grid from '@mui/material/Grid';
import React from 'react'
import zapp from "../../assests/zapp.svg"
import appStore from "../../assests/app store.svg"
import playStore from "../../assests/play store.svg"
import image from "../../assests/kk.JPG"


import "./footer.scss"
import { padding } from '@mui/system';


export const Footer = (props) => {

  return (
    <div >
      <Grid container className="footer">
        <Grid item xs={12}>
          <div className="logo">
            <img src={zapp} alt="" />
          </div>
        </Grid>
        <Grid item sm={6}>
          <div>
            <span class="material-icons">
              place
            </span>
            Mezz. Floor, 228, Boulevard Mall Block-20, <br />D.M.C.H.S, Karachi, Pakistan</div>
          <div>
            <span class="material-icons">
              phone_in_talk
            </span>
            021-3713-ZAPP</div>
        </Grid>
        <Grid container sm={6}>
          <Grid item sm={4}>
            <h4>Information</h4>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>FAQ's</p>
          </Grid>
          <Grid item sm={4}>
            <h4>Helpful Links</h4>
            <p>Return & Refund</p>
            <p>Track Order</p>
            <p>Contact</p>
          </Grid>
          <Grid item sm={4}>
            <h4>Download Zapp App</h4>
            <div><img src={appStore} alt="" /></div>
            <div> <img src={playStore} alt="" /></div>

          </Grid>
        </Grid>
      </Grid>
      <div style={{ textAlign: 'center', padding: 20, }}>
        © 2021 Zapp All rights reserved
      </div>
    </div >

  )
}
export default Footer