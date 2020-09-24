import { Box, Typography } from '@material-ui/core'
import React from 'react'

export const ShowDateRangeFilter = ({ dateRange }) => {
    return (
        Object.entries(dateRange).length !== 0 &&
        <Box display={"flex"} style={{ "width": "-webkit-fill-available", "justifyContent": "center" }}>
            <Typography > Filtre actiu: {" "} </Typography>
            <Typography color="error"> {(dateRange.startDate.toLocaleDateString())}</Typography>
            <Typography > {" - "} </Typography>
            <Typography color="error"> {(dateRange.endDate.toLocaleDateString())}</Typography>
        </Box>
    )
}