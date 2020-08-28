import { Box, Typography, CircularProgress } from '@material-ui/core'
import React from 'react'

export const Spinner = (props) => {
    return (
        <>
            <Box display={"flex"} style={{ "width": "-webkit-fill-available", "justifyContent": "center" }}>
                <Typography color="textPrimary"> Ruidos en Castelldefels Playa </Typography>
            </Box>
            <Box display={"flex"} style={{ "width": "-webkit-fill-available", "justifyContent": "center" }}>
                <CircularProgress />
            </Box>
            <Box display={"flex"} style={{ "width": "-webkit-fill-available", "justifyContent": "center" }}>
                <Typography color="textPrimary">  {props.text} </Typography>
            </Box>

        </>
    )

}

