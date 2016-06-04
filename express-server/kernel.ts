
import 'reflect-metadata';
import * as express from 'express';
import { Kernel } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as path from 'path';
import * as passport from 'passport';
import * as Settings from '../config/environment.dev'

import { FooController } from './controllers/fooController';
import { FooService } from './services/fooService';
import { AuthController } from './controllers/authController';
import { AuthService } from './services/authService';
import * as Morgan from 'morgan'

// set up kernel
let kernel = new Kernel();
kernel.bind<FooService>('FooService').to(FooService);
kernel.bind<FooController>('FooController').to(FooController);
kernel.bind<AuthController>('AuthController').to(AuthController);

// create server
let server = new InversifyExpressServer(kernel);

server.setConfig((app) => {
    var authService = new AuthService();

    var logger = Morgan('combined')
    app.use(logger);
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, "dist-server/express-server")));
    passport.use(authService.GoogleStrategy);
    app.use(passport.initialize());
    passport.use(authService.BearerStrategy);
});

server
    .build()
    .listen(3000, 'localhost', callback);

function callback() {
    console.log('listening on http://localhost:3000 ...');
}