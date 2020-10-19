import { Component } from '@angular/core';
import { Router } from'@angular/router';
import { LeadService } from '../../service/lead.service';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.css']
})
export class AddLeadComponent{

  public name:string;
  public email:string;
  public phone:string;
  public city:string;
  
  constructor(
    private router : Router, 
    private leadService:LeadService, 
    private msgService:MessageService
    ) { }


  addLead(event){
    event.preventDefault()

    // check if null
    if(this.name && this.email && this.phone && this.city)
    {
      this.leadService.addLead(this.name, this.email, this.phone, this.city)
      .subscribe( data =>{
        this.msgService.setMessage();
      }, error => {
        alert('Try again');
      });
      this.router.navigateByUrl('list');
    }
    else
    {
      alert('fill up');
    }
  }

}
