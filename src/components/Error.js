import React from 'react'
import styles from "./Error.module.css";

export const Error = (props) => {
    return (
        <>
            <div className={styles.Error__Container}>
                <div className={styles.Error__Header}> 
                    Oooops! sembla que hi ha hagut algun problema 
                </div>
               <div className={styles.Error__Recomendation}>
                <ul>
                  <li>Verifica que tinguis conexió a internet</li>
                  <li>Pot ser que el full de càlcul estigui sent editat/inconsistent aquest moment</li>
                  <li>Si pasada una estonael problema persisteix avisa als adminsitradors</li>    
                </ul>
                </div>
                <div className={styles.Error__ErrorMessage}>
                Error obtingut: {props.err.message}
                </div>
    
            </div>
        </>
    )

}