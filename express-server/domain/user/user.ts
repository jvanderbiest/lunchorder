import { IUserProfile } from './userProfile'
 
    export interface IUser {
        profile: IUserProfile;
    }

    export class User implements IUser {
        constructor(public profile: IUserProfile) { }
    }
