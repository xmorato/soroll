export const filterData = (dateRange, llistaIncidencies, selected) => {
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