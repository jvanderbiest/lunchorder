    export interface IArticle {
        name: string;
        price: number;
    }
    
    export class Article implements IArticle {
        constructor(public name: string, public price: number) {
            
        }
    }