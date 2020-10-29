import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Lead } from '../Lead';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LeadService {

  private server:string = 'http://localhost/smarti_task/public/';
  private headers:HttpHeaders = new HttpHeaders();
  
  constructor( private http: HttpClient) { 
    this.headers.append('enctype','multipart/form-data');
    this.headers.append('Content-Type','application/json');
    this.headers.append('X-Requested-With','XMLHttpRequest');
  }

  addLead(name:string, email:string, phone:string, city:string): Observable<Lead>
  {
    const newLead = new Lead(name, email, phone, city);
    return this.http.post<Lead>(this.server+'add',newLead);
  }


  getLeads(): Observable<Lead[]>
  {
    return this.http.get<Lead[]>(this.server+'get');
  }


  deleteLead(idNum:any): Observable<Lead>
  {
    const delLead = {
      id:idNum
    }
    return this.http.post<Lead>(this.server+'delete',delLead);
  }


  editLead(idNum:any,name:string, email:string, phone:string, city:string): Observable<Lead>
  {
    const editLead = new Lead(name, email, phone, city);
    editLead.id = idNum;
    return this.http.post<Lead>(this.server+'edit',editLead);
  }
}
