import { useEffect, useState } from 'react'

export const UseFetchData = () => {

    const [dadesFromGoogle, setDadesFromGoogle] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    const firstExtract = (data) => data.map((elem) => elem.content.$t);


    useEffect(() => {
        setLoading(true);
        fetch(`https://spreadsheets.google.com/feeds/list/${process.env.REACT_APP_GOOGLE_SHEETS_DOC_ID}/od6/public/basic?alt=json`)
            .then(res => res.json())
            .then((data) => {
                setDadesFromGoogle(firstExtract(data.feed.entry));
                setLoading(false);
            }
            ).catch(e => {
                setError(e);
                setLoading(false);
            })
    }
        , []);

    return { dadesFromGoogle, error, loading }
}

