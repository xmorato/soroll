import React from "react";
//import { makeStyles } from '@material-ui/core/styles';
import styles from "../App.module.css";

import { Card, CardContent, Typography } from "@material-ui/core";
import ExploreTwoToneIcon from "@material-ui/icons/ExploreTwoTone";

const IncidencesList = ({ incidencies }) => {
  const navigateTo = (lat, lan) => {
    const jumpToGoogleMaps = `https://www.google.es/maps?q=${lat},${lan}`;
    console.log("jumping to: ", jumpToGoogleMaps);
    window.open(jumpToGoogleMaps);
  };

  return (
    <>
      {incidencies
        .sort((data1, data2) => {
          return data2.data.getTime() - data1.data.getTime();
        })
        .map((incidencia, i) => {
          return (
            <div className={styles.Card} key={i}>
              <Card>
                <CardContent>
                  <div className={styles.Card__Header}>
                    <Typography variant="h6">
                      {incidencia.data.toLocaleDateString()}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {incidencia.tipus}
                    </Typography>
                  </div>
                  <Typography>Carrer: {incidencia.carrer}</Typography>
                  <Typography>Comentari:{incidencia.comentari}</Typography>
                  <div className={styles.Card__Compass}>
                    <ExploreTwoToneIcon
                      onClick={() =>
                        navigateTo(incidencia.coord.lat, incidencia.coord.lon)
                      }
                    />
                    <Typography color="primary" fontSize="small">
                      Lat: {incidencia.coord.lat}
                      {" - "}Lon: {incidencia.coord.lon}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
    </>
  );
};

export default IncidencesList;
