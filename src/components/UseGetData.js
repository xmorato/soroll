import {UseFetchData} from "./UseFetchData";
import {UseTransformFinalData} from "./UseTransformFinalData";

const UseGetData = (selected) => {

    const {dadesFromGoogle} = UseFetchData();
    const {tipusIncidencies, incidencies} = UseTransformFinalData(dadesFromGoogle, selected);
    return {tipusIncidencies, incidencies}
}

export default UseGetData;