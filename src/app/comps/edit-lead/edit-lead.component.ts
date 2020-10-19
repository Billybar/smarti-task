import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lead } from '../../Lead';
import { LeadService } from '../../service/lead.service';
import { MessageService } from '../../service/message.service';


@Component({
  selector: 'app-edit-lead',
  templateUrl: './edit-lead.component.html',
  styleUrls: ['./edit-lead.component.css']
})
export class EditLeadComponent implements OnInit {

  private id:any;
  public name:string;
  public email:string;
  public phone:string;
  public city:string;

  constructor(
    private router : Router, 
    private route: ActivatedRoute, 
    private leadservice: LeadService, 
    private msgService:MessageService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      this.id = data.id;
    });
  }

  editLead(event){
    event.preventDefault()
    
    // check if null
    if(this.name && this.email && this.phone && this.city)
    {
      this.leadservice.editLead(this.id, this.name, this.email, this.phone, this.city)
      .subscribe( data => {
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
