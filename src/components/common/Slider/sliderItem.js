import React from 'react'
import { Box, Typography, IconButton } from '@mui/material';


export const SliderItem = (props) => {

    return (
        <div >
            <Box sx={{
                width: 320,
                height: 400,
                background: 'orange',
                position: 'relative'
            }}>
                <span style={{ background: '#e0218a ', color: 'white', fontSize: 30, padding: '0 15px' }}>#1</span>

                <div style={{ position: 'absolute', bottom: '4px' }}>Polo Shirt</div>
                <div style={{ position: 'absolute', bottom: '4px', right: '4px' }}>
                    <span class="material-icons" style={{ background: 'white', borderRadius: '50%', padding: 5 }}>
                        arrow_forward
                    </span>
                </div>



            </Box>
        </div >

    )
}
export default SliderItem

