import { IUserProfile } from './userProfile'
 
    export interface IUser {
        id: string;
        access_token: string;
        name: string;
        email: string;
        profile: IUserProfile;
    }

    export class User implements IUser {
        access_token: string;
        email: string;
        profile: IUserProfile;
        
        constructor(public id : string,public  name: string) { }
    }
