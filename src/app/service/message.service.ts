import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject = new Subject<any>();

  constructor() { }

  setMessage()
  {
    this.subject.next();
  }

  getMeassage()
  {
    return this.subject.asObservable();
  }
}
