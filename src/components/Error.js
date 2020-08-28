import React from 'react'
import { Box, Typography } from '@material-ui/core'

export const Error = (props) => {
    return (
        <>
            <Box display={"flex"} style={{ "width": "-webkit-fill-available", "justifyContent": "center" }}>
                <Typography> Oooops! sembla que hi ha hagut algun problema: {props.err.message}</Typography>
            </Box>
        </>
    )

}