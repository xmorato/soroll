//import moment from 'moment'

export const UseTransformFinalData = (dadesFromGoogle, selected, dateRange) => {

    const extractDataFromSheet = dadesFromGoogle.map((elem) => {
        return (elem.split(','));
    });

    const finalData = extractDataFromSheet.map((elem) => {
        //       console.log("ELEM:", elem);
        const _DATA = 0, _LAT = 2, _LON = 3, _CARRER = 5, _TIPUS = 6, _COMENTARI = 8;
        let coordenada = { coord: { lat: 0, lon: 0 } };
        const _lat = elem[_LAT].split(":");
        const _lon = elem[_LON].split(":");
        const _carrer = elem[_CARRER].split(":");
        const _tipus = elem[_TIPUS].split(":");
        const _comentari = elem[_COMENTARI].split(":");
        let _data = elem[_DATA].split(":")
        //     console.log("_comentari:", _comentari[1])
        _data = new Date(_data[1].trimLeft()); // 1st argument - string, 2nd argument - format
        //_data = new Date("2020/08/15");
        //     console.log("_data:", _data)

        let final = {
            ...coordenada, coord: {
                lat: parseFloat(_lat[1]), lon: parseFloat(_lon[1])
            },
            tipus: _tipus[1].trimLeft(),
            carrer: _carrer[1],
            data: _data, // convert moment.js object to Date object
            comentari: _comentari[1]
        };
        return (final)
    });


    const _incidencesType = (data) => {
        if (data) {
            const _tipus = [];
            data.forEach((elem) => {
                _tipus.push(elem.tipus)
            });
            return ([...new Set(_tipus)].map((elem) => ({ title: elem })).sort());
        } else {
            return ([]);
        }
    };

    /*
    const incidencies = finalData.filter(
        (registre) => {
            return selected.some((elem) =>
                (elem.title === registre.tipus)
            )
        }
    );

        const incidencies = finalData.filter(
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
    });*/

    const tipusIncidencies = _incidencesType(finalData);
    //    console.log("inicidencies:", finalData);
    //    console.log("tipus:", tipusIncidencies)
    return { tipusIncidencies, incidencies: finalData }
}

