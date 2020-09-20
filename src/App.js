import React, { useState } from 'react';
import './App.css';
import CategoriesSelect from "./components/Select";
import Mapa from "./components/Mapa";
import UseGetData from "./components/UseGetData";
import { Box, Typography, Popover } from '@material-ui/core'
import { Error } from './components/Error'
import { Spinner } from './components/Spinner'
import { ChoiceCalendar } from './components/ChoiceCalendar'


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
                                label=""
                                incidences={tipusIncidencies} />
                            <button onClick={toggleCalendar}><span role="img" aria-label="filtre">📅</span> FILTRAR DATES </button>
                            {Object.entries(dateRange).length !== 0 &&
                                <button onClick={resetFiltro}> <span role="img" aria-label="reset">🗑️</span> SENSE FILTRE </button>
                            }


                        </Box>
                        <Box display={"flex"} style={{ "width": "-webkit-fill-available", "justifyContent": "center" }}>
                            <Typography color="textPrimary" variant="h5"> Incidències: {incidenciesFiltrades.length} </Typography>
                        </Box>
                        {Object.entries(dateRange).length !== 0 &&
                            <Box display={"flex"} style={{ "width": "-webkit-fill-available", "justifyContent": "center" }}>
                                <Typography color="colorSecondary"> Filtre actiu: </Typography>
                                <Typography color="error"> {(dateRange.startDate.toLocaleDateString())}</Typography>
                                <Typography color="colorSecondary"><span> - </span> </Typography>
                                <Typography color="error"> {(dateRange.endDate.toLocaleDateString())}</Typography>

                            </Box>
                        }

                        <Box display={"flex"} style={{ "width": "-webkit-fill-available", "justifyContent": "center" }}>
                            <Mapa dades={incidenciesFiltrades} />
                        </Box>
                        <Box display={"flex"} style={{ "width": "-webkit-fill-available", "justifyContent": "center" }}>
                            <Typography> REC-PL: Ruidos en Castelldefels Playa by xmorato@gmail.com </Typography>
                        </Box>

                        <Box display={"flex"} style={{ "width": "-webkit-fill-available", "justifyContent": "center" }}>
                            {showCalendar ? (
                                <Popover
                                    open={showCalendar}
                                    onClose={handleClose}
                                    elevation={20}
                                    anchorOrigin={{
                                        vertical: 'center',
                                        horizontal: 'center',
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
                        </Box>



                    </Box>
                </div>)}

            {!!error && <Error err={error} />}
            {!!loading && <Spinner text={"Carregant dades"} />}
        </>
    )

}

export default App;
