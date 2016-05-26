import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import {Authorization} from './authorization';
import * as passport from 'passport';

class Config {
    private server : http.Server;
    
    constructor(public app : express.Application) {
        console.log("Config constructor");
        var port: number = process.env.PORT || 3000;
        
        this.server = app.listen(port, () => {
            var host = this.server.address().address;
            var port = this.server.address().port;
            console.log('This express app is listening on port:' + port);
        });

        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(express.static(path.join(__dirname, "dist-server")));
        
        passport.use(new Authorization().GoogleStrategy);
    }
}

export { Config };