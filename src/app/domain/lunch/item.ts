    export interface Iitem {
        name: string;
        price: number;
    }
    
    export class Item implements Iitem {
        constructor(public name: string, public price: number) {
            
        }
    }