export const UseTransformFinalData = (dadesFromGoogle, selected) => {

    const extractDataFromSheet = dadesFromGoogle.map((elem) => {
        return (elem.split(','));
    });

    const finalData = extractDataFromSheet.map((elem) => {
        const _LAT = 2, _LON = 3, _CARRER = 5, _TIPUS = 6;
        let coordenada = {coord: {lat: 0, lon: 0}};
        const _lat = elem[_LAT].split(":");
        const _lon = elem[_LON].split(":");
        const _carrer = elem[_CARRER].split(":");
        const _tipus = elem[_TIPUS].split(":");
        let final = {
            ...coordenada, coord: {
                lat: parseFloat(_lat[1]), lon: parseFloat(_lon[1])
            },
            tipus: _tipus[1].trimLeft(),
            carrer: _carrer[1]
        };
        return (final)
    });


    const _incidencesType = (data) => {
        if (data) {
            const _tipus = [];
            data.forEach((elem) => {
                _tipus.push(elem.tipus)
            });
            return ([...new Set(_tipus)].map((elem) => ({title: elem})).sort());
        } else {
            return ([]);
        }
    };

    const incidencies = finalData.filter(
        (local) => {
            return selected.some((elem) => elem.title === local.tipus)
        });

    const tipusIncidencies = _incidencesType(finalData);

    return {tipusIncidencies, incidencies}
}

