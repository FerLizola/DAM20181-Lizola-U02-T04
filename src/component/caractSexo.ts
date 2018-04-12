import { Component } from "@angular/core";
import { KnowSexService } from "../services/knowsex";
@Component({
    selector:'new-component',
    templateUrl:'caractSexo.html'
})

export class CaractSexo{
    public hombre:boolean;
    constructor(knowSex:KnowSexService){
        this.hombre=knowSex.sex;
    }
}