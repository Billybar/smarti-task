import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  @Input() passTesting: string
  @Output() whatever = new EventEmitter();

  public stateData: string;
  
  constructor() { }

  
  onClick(data: string){
    this.whatever.emit(data);
  }
}
