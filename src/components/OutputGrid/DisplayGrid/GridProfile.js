// Profile of the GRID responsible for managing the GRID

import EventEmitter from '../../../utils/EventEmitter';

export class GridProfile extends EventEmitter {

    constructor(id = '', defaultColums = defaultColumnDefs) {
        super();
        this._gridApi = undefined;
        this._columnApi = undefined;
        // INITIALIZE THE STATE VARIABLES //
        this.GRIDPREFIX = id;
    }

    addTableColumns(columnDefs) {

        this._gridApi.setColumnDefs(columnDefs);
        this._gridApi.refreshCells({ force: true });

    }

    setInitialData(data = []) {
        this.initialData = data;
    }

    setApis(girdApi, columnApi) {
        this._gridApi = girdApi;
        this._columnApi = columnApi;
    }

}

const defaultColumnDefs = []