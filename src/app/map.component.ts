import { Component, Input } from '@angular/core';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  toggled:boolean;
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
