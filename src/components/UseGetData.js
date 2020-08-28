import { UseFetchData } from "./UseFetchData";
import { UseTransformFinalData } from "./UseTransformFinalData";

const UseGetData = (selected) => {

    const { dadesFromGoogle, error, loading } = UseFetchData();

    const { tipusIncidencies, incidencies } = UseTransformFinalData(dadesFromGoogle, selected);

    return { tipusIncidencies, incidencies, error, loading }
}

export default UseGetData;