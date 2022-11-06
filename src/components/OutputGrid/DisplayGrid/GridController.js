import EventEmitter from '../../../utils/EventEmitter';

export class GridController extends EventEmitter {

    constructor() {
        super();
    }

    getColumnDefs(data) {
        // Load the grid with the snapshot data 
        if (data && data.length) {
            // Intialize Grid with the snapshot.
            const columns = this.getAllColumns(data);
            return this.initColumnSetup(columns);
        }
    }

    // Combine all data and get all columns 
    getAllColumns(data) {
        let columns = {};
        data.forEach(obj => {
            columns = { ...columns, ...obj };
        });
        return columns;
    }

    initColumnSetup(columns, rows) {

        let coldefs = [];
        Object.keys(columns).forEach(column => {
            if (column != 'images')
                coldefs.push(this.getColumnDef(column));
        });

        return coldefs;

    }

    getColumnDef(colId) {
        let defaultReaperCfg = {
            field: colId,
            colId: colId,
            headerName: colId,
            editable: false
        }
        return defaultReaperCfg;
    }

}