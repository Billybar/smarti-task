import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/header/header.component';
import { FooterComponent } from './comps/footer/footer.component';
import { AddLeadComponent } from './comps/add-lead/add-lead.component';
import { ListLeadComponent } from './comps/list-lead/list-lead.component';
import { EditLeadComponent } from './comps/edit-lead/edit-lead.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddLeadComponent,
    ListLeadComponent,
    EditLeadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    })
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
