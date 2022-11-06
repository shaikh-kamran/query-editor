import React, { useMemo, useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';

export function DisplayGrid(props) {

    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [rowData, setRowData] = useState([]);
    const [columnDefs, setColumnDefs] = useState([]);

    useEffect(() => {
        if (props.coldefs) {
            setColumnDefs(props.coldefs);
        }
    }, [props.coldefs]);

    useEffect(() => {
        if (props.rowData) {
            setRowData(props.rowData);
        }
    }, [props.rowData])

    return (
        <div style={containerStyle}>
            <div style={{ height: '80vh', boxSizing: 'border-box' }}>
                <div style={gridStyle} className="ag-theme-alpine">
                    <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
                </div>
            </div>
        </div>
    );

};