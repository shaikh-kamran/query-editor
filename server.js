const express = require('express');
const http = require('http');
const compression = require('compression');
const cors = require('cors');

async function init() {

    const port = process.env.PORT || 4000;
    const app = express();
    app.use(compression());

    app.use(cors({
        origin: 'http://localhost:3000'
    }));

    app.use(express.static('build'));

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    var httpsServer = http.Server(app);

    process.on('uncaughtException', (err) => { console.log(err) });
    // app.use(errorHandler({ detailed: process.env.NODE_ENV !== 'production' }));

    httpsServer.listen(port, () => {
        console.log(`App listening on port ${port}`);
    });

}

init();