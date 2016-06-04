import * as express from 'express';
import { Controller, Get } from 'inversify-express-utils';
import { injectable, inject } from 'inversify';
 
@injectable()
export class FooService {
    
    private data : any = {
      1: 'Foo1',
      2: 'Bar1'  
    };
    
    public get(id: number): string {
        console.log("getting id123: " +id);
        return this.data[id];
    }
}