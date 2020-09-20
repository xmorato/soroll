import { UseFetchData } from "./UseFetchData";
import { UseTransformFinalData } from "./UseTransformFinalData";

const UseGetData = (selected, dateRange) => {

    const { dadesFromGoogle, error, loading } = UseFetchData();

    const { tipusIncidencies, incidencies } = UseTransformFinalData(dadesFromGoogle, selected, dateRange);

    return { tipusIncidencies, incidencies, error, loading }
}

export default UseGetData;