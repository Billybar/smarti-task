import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public testing = 'test';
  public title = 'smarti-task';


  onWhatEver(data: string){
    console.log(data);
  }
}
