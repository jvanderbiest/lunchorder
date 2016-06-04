import NodeCache = require('node-cache');

export interface ICacheService {
    set(key:string, obj : any, ttl : number, callback : Function) : void;
    get(key:string, callback : Function) : void;
}

export class CacheService implements ICacheService {
    myCache : NodeCache;
    
    constructor() {
        console.log("Cache init");
        this.myCache = new NodeCache();
    }
    
    set(key:string, obj : any, ttl : number, cb : any) : void {
        this.myCache.set(key, obj, ttl, cb);
    }
    
    get(key:string, callback : any) : void {
        this.myCache.get(key, callback);
    }
}