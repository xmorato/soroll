import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

const IncidencesBoard = ({ data }) => {

    if (!data) return null;
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" color="primary">Status</Typography>
                {data.map((tipus) => {
                    return (
                        <React.Fragment key={tipus[0]}>
                            <p>
                                <strong >{tipus[0]}</strong>{": "}{tipus[1]}
                            </p>
                        </React.Fragment >
                    )
                })
                }
            </CardContent>
        </Card>
    )

}

export default IncidencesBoard