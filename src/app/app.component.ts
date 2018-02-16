import { Component, Input } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemToggled:boolean;
  itemToggler(){
    this.itemToggled = !this.itemToggled;
  }


  // toggled:boolean=false;
  // textTogglerMap:string='show map';

  // toggleMap(){
  //   if (this.toggled==true){
  //     this.toggled=!this.toggled;
  //     this.textTogglerMap='show map';
  //   } else {
  //     this.toggled=!this.toggled;
  //     this.textTogglerMap='hide map';
  //   }
  // };

}
