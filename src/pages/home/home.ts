import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OtherPage } from "../otherPage/otherPage";
import { KnowSexService } from "../../services/knowsex";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public curp:string;
  constructor(public navCtrl: NavController,public knowSex: KnowSexService) {
    this.curp="";
    this.knowSex.sex=false;
  }

  verificarSexo(){
    console.log(this.curp.substring(8,9));
    if(this.curp.substring(8,9)==='H'){
      this.navCtrl.push(OtherPage);
      this.knowSex.sex=true;
    }
      
    else{
      this.navCtrl.push(OtherPage,{sex:false});
      this.knowSex.sex=false;
    }
      
  }
}
