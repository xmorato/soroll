import {useEffect, useState} from 'react'

export const UseFetchData = () => {

    const [dadesFromGoogle, setDadesFromGoogle] = useState([]);

    const firstExtract = (data) => data.map((elem) => elem.content.$t);


    useEffect(() => {
            fetch(`https://spreadsheets.google.com/feeds/list/${process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID}/od6/public/basic?alt=json`)
                .then(res => res.json())
                .then((data) => {
                        //           console.log("DATA ABANS:", data.feed.entry);
                        setDadesFromGoogle(firstExtract(data.feed.entry));
                    }
                ).catch(e => console.log("error al fetch", e))
        }
        , []);

    return {dadesFromGoogle}
}

