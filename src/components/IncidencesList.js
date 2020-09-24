import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import styles from '../App.module.css';

import { Card, CardContent, Typography } from '@material-ui/core';


const IncidencesList = ({ incidencies }) => {

    return (
        <>
            {
                incidencies.sort((data1, data2) => {
                    return (data2.data.getTime() - (data1.data.getTime())
                    )
                })
                    .map((incidencia, i) => {
                        return (
                            <div className={styles.card} key={i}>
                                <Card className={styles.card} >
                                    <CardContent>
                                        <Typography variant="h5">Data: {incidencia.data.toLocaleDateString()}</Typography>
                                        <Typography variant="h6">Tipus: {incidencia.tipus}</Typography>
                                        <Typography>Carrer: {incidencia.carrer}</Typography>
                                        <Typography>Comentari:{incidencia.comentari}</Typography>
                                        <Typography>Lat: {incidencia.coord.lat}</Typography>
                                        <Typography>Long: {incidencia.coord.lat}</Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    })
            }
        </>
    )
}

export default IncidencesList