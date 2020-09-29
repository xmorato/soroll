import React from "react";
//import { makeStyles } from '@material-ui/core/styles';
import styles from "../App.module.css";

import { Card, CardContent, Typography } from "@material-ui/core";
import ExploreTwoToneIcon from "@material-ui/icons/ExploreTwoTone";
import QRCode from "react-qr-code";

const IncidencesList = ({ incidencies }) => {
  const navigateTo = (lat, lan) => {
    window.open(getGoogleMapsURL(lat, lan));
  };

  const getGoogleMapsURL = (lat, lan) => {
    return `https://www.google.es/maps?q=${lat},${lan}`;
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
                  <div
                    className={styles.Card__CompassContainer}
                    onClick={() =>
                      navigateTo(incidencia.coord.lat, incidencia.coord.lon)
                    }
                  >
                    <div className={styles.Card__Compass}>
                      <ExploreTwoToneIcon fontSize="small" />
                      <Typography color="primary" fontSize="small">
                        Lat: {incidencia.coord.lat}
                        {" - "}Lon: {incidencia.coord.lon}
                      </Typography>
                    </div>
                    <div className={styles.Card__QRCode}>
                      {/*
                      <QRCode
                        value={getGoogleMapsURL(
                          incidencia.coord.lat,
                          incidencia.coord.lon
                        )}
                        size="40"
                        />*/}
                    </div>
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
