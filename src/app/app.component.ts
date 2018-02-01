import { Component } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './app.component.html',
})
export class AppComponent {
  toggled:boolean=false;
  textTogglerMap:string='show map';

  toggleMap(){
    if (this.toggled==true){
      this.toggled=!this.toggled;
      this.textTogglerMap='show map';
    } else {
      this.toggled=!this.toggled;
      this.textTogglerMap='hide map';
    }
  };

}
