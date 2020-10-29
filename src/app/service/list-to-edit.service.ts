import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListToEditService {

  private listToEditSubject = new Subject();
  public listToEditAsObservable = this.listToEditSubject.asObservable();

  constructor() { }


  sendMessage(msg: any){
    this.listToEditSubject.next(msg);
  }
}
