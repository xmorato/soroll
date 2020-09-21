import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card, CardContent, Typography } from '../../node_modules/@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '2 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const IncidencesList = ({ incidencies }) => {
    const classes = useStyles();

    return (
        <div className="cardsContainer">
            {
                incidencies.sort((data1, data2) => {
                    return (data2.data.getTime() - (data1.data.getTime())
                    )
                })
                    .map((incidencia) => {
                        return (
                            <div className="card">
                                <Card className={classes.root} variant="outlined">
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
        </div>
    )
}

export default IncidencesList