import { Component, OnInit } from '@angular/core';
import { Lead } from '../../Lead';
import { LeadService } from '../../service/lead.service';
import { MessageService } from '../../service/message.service';
import { ListToEditService } from '../../service/list-to-edit.service' 

 
@Component({
  selector: 'app-list-lead',
  templateUrl: './list-lead.component.html',
  styleUrls: ['./list-lead.component.css']
})
export class ListLeadComponent implements OnInit {

  public popoverTitle: string = '--Notice';
  public popoverMessage: string = 'Do you want to delete?';
  public idColor: string = 'red';

  public leads: Lead[] = [];

  constructor(
    private listToEditService: ListToEditService, 
    private leadservice: LeadService, 
    private msgService: MessageService 
    ) { }

  ngOnInit(): void {
    this.getListLeads()
    this.msgService.getMeassage()
    .subscribe( data =>{
      this.getListLeads();
    })
  }

  getListLeads()
  {
    this.leadservice.getLeads()
    .subscribe((allData)=>{
      this.leads = allData;
    }, error => {
        alert('Reload');
      });
  }

  delete(idNum:any)
  {
    this.leadservice.deleteLead(idNum)
    .subscribe( data =>{
      this.msgService.setMessage()
    }, error => {
        alert('Try again');
      });
  }


  passLead(lead: any)
  {
    console.log(lead+ ' from list.ts');
    this.listToEditService.sendMessage(lead);
  }
}
