import { Component } from '@angular/core';


@Component({
    selector:'otherPage',
    templateUrl:'otherPage.html'
})
export class OtherPage{
    public hombre:boolean;
    constructor(){
        console.log("variable: "+this.hombre);
    }
}