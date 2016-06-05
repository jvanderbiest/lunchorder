import * as express from 'express';
import { Controller, Get } from 'inversify-express-utils';
import { injectable, inject } from 'inversify';
import * as passport from 'passport';

import { ISettings } from '../config/settings';

@Controller('/user')
@injectable()
export class UserController {
    constructor( @inject('ISettings') private settings: ISettings ) { }
    
    @Get('/profile', passport.authenticate('bearer', { session: false }))
    private getProfile(req: express.Request, res: express.Response): void {
        res.send('authenticated!');
     }
}