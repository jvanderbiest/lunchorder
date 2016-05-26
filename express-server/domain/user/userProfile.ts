namespace server.domain.user {
    export interface IUserProfile {
        id: string;
        displayName: string;
        image: string;
    }

    export class UserProfile implements IUserProfile {
        constructor(public id: string, public displayName: string, public image: string) {
        } 
    } 
}