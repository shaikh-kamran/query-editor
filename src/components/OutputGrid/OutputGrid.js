import React, { useEffect, useState } from 'react';
import styles from './outputgrid.module.scss';

import { DisplayGrid } from './DisplayGrid/DisplayGrid';
import { GridController } from './DisplayGrid/GridController';

function OutputGrid(props) {

    const [gridCtlr, setCtrl] = useState(new GridController("atlan"));
    const [columnDefs, setColumnDefs] = useState([]);
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        if (props.data && props.data.length) {
            const tabledata = props.data;
            const defs = gridCtlr.getColumnDefs(tabledata);
            setColumnDefs(defs);
            setRowData(tabledata);
        }
    }, [props.data])

    return (
        <div className={styles.gridblock}>
            <DisplayGrid
                rowData={rowData}
                coldefs={columnDefs}
                controller={gridCtlr}
            />
        </div>
    );
}

export default OutputGrid;
