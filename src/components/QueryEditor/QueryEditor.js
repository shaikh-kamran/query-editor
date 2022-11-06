import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-sql';
import 'prismjs/themes/prism.css';
import styles from './queryeditor.module.scss';
import { FaCopy, FaPlay, FaSave, FaHistory } from 'react-icons/fa';
import { getQueryInLocal, setQueryInLocal, getQuerylistInLocal, setQuerylistInLocal } from '../../utils/LocalStorage';
import QueryList from './QueryList/QueryList';

const QueryEditor = (props) => {

    const [showQueryList, setshowQueryList] = useState(false);
    const [query, setQuery] = useState(getQueryInLocal() ?? `SELECT * FROM Customers`);

    const copyQueryToClipboard = async () => {
        await navigator.clipboard.writeText(query);
    }

    const saveQueryToMemory = async () => {
        const list = getQuerylistInLocal();
        list.push(query);
        setQuerylistInLocal(list);
    }

    const changeQuery = (q) => {
        setQuery(q);
        setQueryInLocal(q);
    }


    return (
        <div className={styles.queryeditorblock}>
            <div className={styles.controlblock}>
                <div className={styles.showquerylist} title="Run saved Queries" onClick={() => { setshowQueryList(!showQueryList) }}>
                    <FaHistory />
                </div>
                <div className={styles.savebutton} title="Copy the Query to Clipboard" onClick={() => { copyQueryToClipboard() }}>
                    <FaCopy />
                </div>
                <div className={styles.copybutton} title="Save the Query for future use!" onClick={() => { saveQueryToMemory() }}>
                    <FaSave />
                </div>
                <div className={styles.runbutton} title="Run the Query." onClick={() => { props.runQuery(query) }}>
                    <FaPlay />
                </div>
            </div>
            <label for="queryeditor">Enter your SQL query here and click run.</label>
            <Editor
                id='queryeditor'
                title='Enter your SQL query here and click run.'
                className={styles.queryeditor}
                value={query}
                onValueChange={code => changeQuery(code)}
                highlight={code => highlight(code, languages.js)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                }}
            />
            {
                showQueryList ?
                    <QueryList
                        closeList={() => setshowQueryList(false)}
                        selectQuery={(q) => { changeQuery(q); setshowQueryList(false); }}
                    />
                    : null
            }
        </div>
    );
}

export default QueryEditor;
