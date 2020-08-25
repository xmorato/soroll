import React, {useState} from 'react';
import './App.css';
import CategoriesSelect from "./components/Select";
import Mapa from "./components/Mapa";
import UseGetData from "./components/UseGetData";
import {Box, Typography} from '@material-ui/core'


function App() {

    const [selected, setSelected] = useState([]);
    const {tipusIncidencies, incidencies} = UseGetData(selected);

    return (
        <div className="App">
            <Box display={"flex"}
                 style={{"flexDirection": "column", "alignItems": "flex-start", "width": "-webkit-fill-available"}}>
                <Box display={"flex"} style={{"width": "-webkit-fill-available", "justifyContent": "center"}}>
                    <CategoriesSelect selected={selected}
                                      setSelected={setSelected}
                                      label="REC-PL"
                                      incidences={tipusIncidencies}/>
                </Box>
                <Box display={"flex"} style={{"width": "-webkit-fill-available", "justifyContent": "center"}}>
                    <Typography> Incidències: {incidencies.length} </Typography>
                </Box>
                <Box display={"flex"} style={{"width": "-webkit-fill-available", "justifyContent": "center"}}>
                    <Mapa dades={incidencies}/>
                </Box>
                <Box display={"flex"} style={{"width": "-webkit-fill-available", "justifyContent": "center"}}>
                    <Typography> REC-PL: Ruidos en Castelldefels Playa by xmorato@gmail.com </Typography>
                </Box>

            </Box>
        </div>);
}

export default App;
