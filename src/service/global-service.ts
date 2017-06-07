import {Injectable} from "@angular/core";
@Injectable()
export class GlobalService{
    private _global = {
        name:'hello angular'
    };

    get global(){
        return this._global;
    }

    set global(global){
        this._global = global;
    }
}
