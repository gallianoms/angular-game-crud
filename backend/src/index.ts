import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoute from './routes/indexRoute';
import gameRoute from './routes/gameRoute';

import {startConnection} from './database/database';

class Server {

    // app es publica para que sea accesible a todos los miembros de la clase
    public app: Application;

    constructor() {
        startConnection();
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({
            extended: false
        }));

    }

    routes(): void {
        this.app.use(indexRoute);
        this.app.use('/api/games', gameRoute);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`);
        });
    }
    
}

const server = new Server();

server.start();