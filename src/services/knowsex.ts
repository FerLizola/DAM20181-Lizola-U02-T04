import { Injectable } from "@angular/core";

@Injectable()
export class KnowSexService{
    private _sex:boolean;
    

    constructor(){
        
    }

    set sex(newVal:boolean){
        this._sex=newVal;
    }
    get sex():boolean{
        return this._sex;
    }
}