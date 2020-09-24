import { Typography } from '@material-ui/core'
import React from 'react'
import styles from '../../App.module.css';


export const ShowDateRangeFilter = ({ dateRange }) => {
    return (
        Object.entries(dateRange).length !== 0 &&
        <div className={styles.ShowDateRangeFilter}>
            <Typography > Filtre actiu: {" "} </Typography>
            <Typography color="error"> {(dateRange.startDate.toLocaleDateString())}</Typography>
            <Typography > {" - "} </Typography>
            <Typography color="error"> {(dateRange.endDate.toLocaleDateString())}</Typography>
        </div>
    )
}