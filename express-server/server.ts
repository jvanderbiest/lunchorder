/// <reference path="../typings/index.d.ts" />
import * as express from 'express';

import { Routes } from './init/routes';
import { Config } from './init/config';
import * as http from 'http';


/**
 * The server
 * @class BootstrapServer
 */
export class BootstrapServer {
    public app: express.Application;
    private server : http.Server;
    
    constructor() { 
        console.log("Bootstrapped");
        this.app = express();
        
        this.config(this.app);
        this.routes(this.app);
    }
    
    config(app : express.Application) : void {
        new Config(app);
    }
    
    routes(app: express.Application) : void {
         new Routes(app);
    }
}

new BootstrapServer();