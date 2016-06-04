import * as express from 'express';
import { Controller, Get } from 'inversify-express-utils';
import { injectable, inject } from 'inversify';
 
@injectable()
export class FooService {
    
    private data : any = {
      1: 'Foo',
      2: 'Bar'  
    };
    
    public get(id: number): string {
        return this.data[id];
    }
}