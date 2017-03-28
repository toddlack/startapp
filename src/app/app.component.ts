import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Binding demo';
  userName="temp";
  constructor() {
       this.userName=""  ;
  }
  onResetName() {
    this.userName="";
  }
}
