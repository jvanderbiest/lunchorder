import * as express from 'express';
import { Controller, Get } from 'inversify-express-utils';
import { injectable, inject } from 'inversify';
import * as passport from 'passport';
import * as Settings from '../config/environment.dev'
import * as Constants from '../config/constants'
import { FooService } from '../services/fooService'

@Controller('/auth')
@injectable()
export class AuthController {
    @Get('/')
    private index(req: express.Request): void {
        console.log("getting auth 1");
    }
    
    constructor( @inject('FooService') private fooService: FooService ) {
        console.log("foo ctrl");
    }
    
    /**
     * Use passport.authenticate() as route middleware to authenticate the request.
     * The first step in Google authentication will involve redirecting the user to google.com. 
     * After authorization, Google will redirect the user back to this application at /auth/google/callback
     */
    @Get('/google', passport.authenticate('google', { session: false, scope: ['https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email'], accessType: 'offline', approvalPrompt: 'force' }))
    private googleAuth(): void { }

    /**
     * Use passport.authenticate() as route middleware to authenticate the request.
     * If authentication fails, the user will be redirected back to the login page.
     * Otherwise, the primary route function function will be called,
     * which, in this example, will redirect the user to the home page.
     */
    @Get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: Settings.environment.frontEnd.url + Constants.environment.frontEnd.urls.login }))
    private googleAuthCallback(req: express.Request, res: express.Response): void {
        res.redirect(`${Settings.environment.frontEnd.url}/access_token=${req.user.access_token}`);
    }
}