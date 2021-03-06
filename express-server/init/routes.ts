import * as express from 'express';
import * as passport from 'passport';

class Routes {
    constructor(public app : express.Application) {
        console.log("Route constructor");
        var router : express.Router = express.Router();
        
        // home page route (http://localhost:8080)
        router.get('/', function(req: express.Request, res: express.Response) {
            res.send('im the home page!');  
        });

        // about page route (http://localhost:8080/about)
        router.get('/about', function(req: express.Request, res: express.Response) {
            res.send('im the about page!'); 
        });
        
        // GET /auth/google
        //   Use passport.authenticate() as route middleware to authenticate the
        //   request.  The first step in Google authentication will involve
        //   redirecting the user to google.com.  After authorization, Google
        //   will redirect the user back to this application at /auth/google/callback
        app.get('/auth/google',
        passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

        // GET /auth/google/callback
        //   Use passport.authenticate() as route middleware to authenticate the
        //   request.  If authentication fails, the user will be redirected back to the
        //   login page.  Otherwise, the primary route function function will be called,
        //   which, in this example, will redirect the user to the home page.
        app.get('/auth/google/callback', 
        passport.authenticate('google', { failureRedirect: '/login' }),
        function(req : express.Request, res : express.Response) {
            res.redirect('/');
        });
        
        // apply the routes to our application
        app.use('/', router);
    }
}

export { Routes };