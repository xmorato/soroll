import React, { useState } from 'react';
import styles from './App.module.css';
import CategoriesSelect from "./components/Select";
import Mapa from "./components/Mapa";
import UseGetData from "./components/UseGetData";
import { Box, Typography, Popover, Button } from '@material-ui/core'
import { Error } from './components/Error'
import { Spinner } from './components/Spinner'
import CountUp from 'react-countup';
import IncidencesList from './components/IncidencesList'
import IncidencesBoard from './components/IncidencesBoard';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import { filterData } from './utils/filterData'
import { ShowDateRangeFilter } from './components/dates/ShowDateRangeFilter'
import { ChoiceCalendar } from './components/dates/ChoiceCalendar'
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
                        <Box display={"flex"} style={{ "marginBottom": "10px", "width": "-webkit-fill-available", "justifyContent": "center" }}>
                            <CategoriesSelect
                                selected={selected}
                                setSelected={setSelected}
                                label="Selecciona el(s) tipus de incidències"
                                incidences={tipusIncidencies} />
                        </Box>
                        <Box display={"flex"} style={{ "width": "-webkit-fill-available", "justifyContent": "center" }}>
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
                        {/* {showCalendar ? (
                            <Popover
                                open={showCalendar}
                                onClose={handleClose}
                                elevation={8}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <Typography align="center">  Selecciona dues dates o un rang a la columna de la dreta - ESC per sortir</Typography>
                                <ChoiceCalendar onChangeDate={onChangeDateOnCalendar} />
                            </Popover>)
                            : null} */}

                        <ShowDateRangePicker
                            handleClose={handleClose}
                            onChangeDateOnCalendar={onChangeDateOnCalendar}
                            showCalendar={showCalendar}
                        />

                        {/* <div className="incidences_desglos">
                            <IncidencesBoard data={llistaIncidenciesTotal} setSelected={setSelected} />
                        </div> */}

                        {incidenciesFiltrades.length !== 0 ?
                            <div id="principal" className={styles.cardsContainer}>
                                <IncidencesList incidencies={incidenciesFiltrades} />
                            </div>
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
