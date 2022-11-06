import React, { useState, useEffect } from "react";
import styles from './querylist.module.scss';
import { getQuerylistInLocal } from '../../../utils/LocalStorage';
import { FaWindowClose } from 'react-icons/fa';

const QueryList = (props) => {

    const [querylist, setQuerylist] = useState([]);

    useEffect(() => {
        const qlist = getQuerylistInLocal();
        setQuerylist(qlist);
    }, [])

    return (
        <div className={styles.querylist}>
            <div className={styles.header}>
                <div className={styles.text}>
                    Choose Query to Run.
                </div>
                <div className={styles.closebutton}>
                    <FaWindowClose onClick={() => props.closeList()} />
                </div>
            </div>
            {
                querylist.length ?
                    <div>
                        {
                            querylist.map((query, index) => {
                                return (
                                    <div className={styles.query} key={index} onClick={() => props.selectQuery(query)}>
                                        {query}
                                    </div>
                                )
                            })
                        }

                    </div>
                    :
                    <div className={styles.note}>
                        You havent saved any queries yet!!!
                    </div>
            }
        </div>
    )
}

export default QueryList;