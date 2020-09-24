import React, { useState } from 'react';
import styles from './App.module.css';
import CategoriesSelect from "./components/Select";
import Mapa from "./components/Mapa";
import UseGetData from "./components/UseGetData";
import { Box, Typography, Button } from '@material-ui/core'
import { Error } from './components/Error'
import { Spinner } from './components/Spinner'
import CountUp from 'react-countup';
import IncidencesList from './components/IncidencesList'
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import { filterData } from './utils/filterData'
import { ShowDateRangeFilter } from './components/dates/ShowDateRangeFilter'
import { ShowDateRangePicker } from './components/dates/ShowDateRangePicker'


function App() {

    const [selected, setSelected] = useState([]);
    const [dateRange, setDateRange] = useState({});
    const { tipusIncidencies, incidencies, error, loading } = UseGetData(selected, dateRange);
    const [showCalendar, setShowCalendar] = useState(false);


    const onChangeDateOnCalendar = (range) => {
        //   console.log("Incidencies:", incidencies)
        setDateRange((previous) => range);
        setShowCalendar(false);
    }

    const toggleCalendar = (e) => {
        setShowCalendar((prevState) => !prevState);
    }

    const handleClose = () => {
        toggleCalendar();
    };

    const resetFiltro = () => {
        setDateRange({});
    }


    const incidenciesFiltrades = filterData(dateRange, incidencies, selected);
    const objLlistaIncidenciesTotal = incidencies.reduce((acum, order) => {
        return { ...acum, [order.tipus]: (acum[order.tipus] || 0) + 1 }
    }, {})
    const claus = Object.keys(objLlistaIncidenciesTotal);
    let llistaIncidenciesTotal = [];
    for (let i = 0; i < claus.length; i++) {
        llistaIncidenciesTotal = [...llistaIncidenciesTotal, [claus[i], objLlistaIncidenciesTotal[claus[i]]]]
    }

    return (
        <>
            {!error && !loading && (
                <div className="App">
                    <Box display={"flex"}
                        style={{ "flexDirection": "column", "alignItems": "flex-start", "width": "-webkit-fill-available" }}>
                        <div className={styles.SearchBarContainer}>
                            <CategoriesSelect
                                selected={selected}
                                setSelected={setSelected}
                                label="Selecciona el(s) tipus de incidències"
                                incidences={tipusIncidencies} />
                        </div>
                        <Box display={"flex"} style={{ "width": "-webkit-fill-available", "justifyContent": "center", "marginTop": "10px" }}>
                            <Button color="primary" onClick={toggleCalendar}><EventAvailableIcon />{" "}Filtrar per Dates</Button>
                            {Object.entries(dateRange).length !== 0 &&
                                <Button color="secondary" onClick={resetFiltro}> <EventBusyIcon />{" "}Esborrar filtre</Button>
                            }
                        </Box>
                        <Box display={"flex"} style={{ "width": "-webkit-fill-available", "justifyContent": "center" }}>
                            <Typography color="textPrimary" variant="h6" gutterBottom> Incidències: {" "}
                                <CountUp start={0}
                                    end={incidenciesFiltrades.length}
                                    duration={1.25}
                                />
                            </Typography>
                        </Box>

                        <ShowDateRangeFilter dateRange={dateRange} />

                        <Box m={2} display={"flex"} style={{ "width": "-webkit-fill-available", "justifyContent": "center" }}>
                            <Mapa dades={incidenciesFiltrades} />
                        </Box>

                        <ShowDateRangePicker
                            handleClose={handleClose}
                            onChangeDateOnCalendar={onChangeDateOnCalendar}
                            showCalendar={showCalendar}
                        />

                        {incidenciesFiltrades.length !== 0 ?
                            <>
                                <div className={styles.IncidencesList__title}>
                                    <Typography style={{ "fontSize": "1.2rem" }}> Incidències de més a menys recents</Typography>
                                </div>
                                <div className={styles.IncidencesList}>
                                    <IncidencesList incidencies={incidenciesFiltrades} />
                                </div>
                            </>
                            : null
                        }
                    </Box>
                    <Box display={"flex"} style={{ "width": "-webkit-fill-available", "justifyContent": "center" }}>
                        <Typography style={{ "fontSize": "0.8rem" }}> REC-PL: Ruidos en Castelldefels Playa, fem un millor barri </Typography>
                    </Box>
                </div>)}

            {!!error && <Error err={error} />}
            {!!loading && <Spinner text={"Carregant dades"} />}
        </>
    )

}

export default App;
