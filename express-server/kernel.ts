import 'reflect-metadata';
import * as express from 'express';
import { Kernel } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as path from 'path';
import * as passport from 'passport';
import * as Settings from '../config/environment.dev'
import * as Morgan from 'morgan'

import { AuthController } from './controllers/authController';
import { UserController } from './controllers/userController';
import { AuthService, IAuthService } from './services/authService';
import { ISettings } from './config/settings';
import { DevelopmentSettings } from './config/settings.development';

// set up kernel
let kernel = new Kernel();
kernel.bind<AuthController>('AuthController').to(AuthController);
kernel.bind<UserController>('UserController').to(UserController);
kernel.bind<ISettings>("ISettings").toConstantValue(new DevelopmentSettings());
kernel.bind<IAuthService>("IAuthService").to(AuthService);

// create server
let server = new InversifyExpressServer(kernel);

// configure server
server.setConfig((app) => {
    var authService = kernel.get<IAuthService>("IAuthService");

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