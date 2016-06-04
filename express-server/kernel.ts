
import 'reflect-metadata';
import * as express from 'express';
import { Kernel } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
 
import { FooController } from './controllers/fooController';
import { FooService } from './services/fooService';
 
// set up kernel
let kernel = new Kernel();
kernel.bind<FooService>('FooService').to(FooService);
kernel.bind<FooController>('FooController').to(FooController);
 
// create server
let server = new InversifyExpressServer(kernel);

server
    .build()
    .listen(3000, 'localhost', callback);
 
function callback() {
    console.log('listening on http://localhost:3000');
}