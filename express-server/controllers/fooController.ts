import * as express from 'express';
import { Controller, Get } from 'inversify-express-utils';
import { injectable, inject } from 'inversify';
import { FooService } from '../services/fooService'
import * as passport from 'passport';
import * as Settings from '../config/environment.dev'
import * as Constants from '../config/constants'

@Controller('/foo')
@injectable()
export class FooController {
    
    constructor( @inject('FooService') private fooService: FooService ) {
        console.log("foo ctrl");
    }
    
    @Get('/')
    private index(req: express.Request): string {
        console.log("getting1");
        return this.fooService.get(1);
    }
}