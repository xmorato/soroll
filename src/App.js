import React, { useState } from 'react';
import styles from './App.module.css';
import CategoriesSelect from "./components/Select";
import Mapa from "./components/Mapa";
import UseGetData from "./components/UseGetData";
import { Box, Typography, Popover, Button } from '@material-ui/core'
import { Error } from './components/Error'
import { Spinner } from './components/Spinner'
import { ChoiceCalendar } from './components/ChoiceCalendar'
import CountUp from 'react-countup';
import IncidencesList from './components/IncidencesList'


function App() {

    const [selected, setSelected] = useState([]);
    const [dateRange, setDateRange] = useState({});
    const { tipusIncidencies, incidencies, error, loading } = UseGetData(selected, dateRange);
    const [showCalendar, setShowCalendar] = useState(false);


    const onChangeDateOnCalendar = (range) => {
        console.log("Incidencies:", incidencies)
        setDateRange((previous) => range);
        setShowCalendar(false);
    }

    const toggleCalendar = (e) => {
        console.log("Estat: ", showCalendar);
        setShowCalendar((prevState) => !prevState);

    }

    const handleClose = () => {
        toggleCalendar();
    };

    const resetFiltro = () => {
        setDateRange({});
    }

    // const filterIncidencies = (llistaIncidencies, selected) =>{
    //     return (llistaIncidencies.filter(
    //     (registre) => {
    //         return selected.some((elem) =>
    //             (elem.title === registre.tipus)
    //         )
    //     }
    // ))}

    const filterData = (dateRange, llistaIncidencies, selected) => {
        return llistaIncidencies.filter(
            (registre) => {
                //         console.log("incidencia:", local);
                if (!!dateRange && Object.entries(dateRange).length === 0) {
                    //             console.log("ESTIC a incidiencies i daterange es buid:", dateRange)
                    return selected.some((elem) => elem.title === registre.tipus)
                } else {
                    //             console.log("daterange hauria de no ser null:", dateRange)
                    return selected.some((elem) =>
                        (elem.title === registre.tipus
                            && (registre.data >= dateRange.startDate)
                            && (registre.data <= dateRange.endDate)
                        ))
                }
            });
    }

    const incidenciesFiltrades = filterData(dateRange, incidencies, selected);

    return (
        <>
            {!error && !loading && (
                <div className="App">
                    <Box display={"flex"}
                        style={{ "flexDirection": "column", "alignItems": "flex-start", "width": "-webkit-fill-available" }}>
                        <Box display={"flex"} style={{ "width": "-webkit-fill-available", "justifyContent": "center" }}>
                            <CategoriesSelect selected={selected}
                                setSelected={setSelected}
                                label="Selecciona el(s) tipus de incidències"
                                incidences={tipusIncidencies} />
                        </Box>
                        <Box display={"flex"} style={{ "width": "-webkit-fill-available", "justifyContent": "center" }}>
                            <Button color="primary" onClick={toggleCalendar}><span role="img" aria-label="filtre">📅</span>{" "}Filtrar per Dates</Button>
                            {Object.entries(dateRange).length !== 0 &&
                                <Button color="secondary" onClick={resetFiltro}> <span role="img" aria-label="reset">🗑️</span>{" "}Esborrar filtre</Button>
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
                        {Object.entries(dateRange).length !== 0 &&
                            <Box display={"flex"} style={{ "width": "-webkit-fill-available", "justifyContent": "center" }}>
                                <Typography color="colorSecondary"> Filtre actiu: {" "} </Typography>
                                <Typography color="error"> {(dateRange.startDate.toLocaleDateString())}</Typography>
                                <Typography color="colorSecondary">{" - "} </Typography>
                                <Typography color="error"> {(dateRange.endDate.toLocaleDateString())}</Typography>

                            </Box>
                        }

                        <Box m={2} display={"flex"} style={{ "width": "-webkit-fill-available", "justifyContent": "center" }}>
                            <Mapa dades={incidenciesFiltrades} />
                        </Box>
                        {showCalendar ? (
                            <Popover
                                open={showCalendar}
                                onClose={handleClose}
                                elevation={20}
                                anchorOrigin={{
                                    vertical: 'center',
                                    horizontal: 'top',
                                }}
                                transformOrigin={{
                                    vertical: 'center',
                                    horizontal: 'center',
                                }}
                            >
                                <Typography align="center">  Selecciona dues dates o un rang a la columna de la dreta - ESC per sortir</Typography>
                                <ChoiceCalendar onChangeDate={onChangeDateOnCalendar} />
                            </Popover>)
                            : null}
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
