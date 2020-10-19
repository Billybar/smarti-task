import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLeadComponent } from './comps/add-lead/add-lead.component';
import { EditLeadComponent } from './comps/edit-lead/edit-lead.component';
import { ListLeadComponent } from './comps/list-lead/list-lead.component';


const routes: Routes = [
  {path:'',redirectTo: '/list', pathMatch: 'full'},
  {path:'list', component:ListLeadComponent},
  {path:'add', component:AddLeadComponent},
  {path:'edit/:id', component: EditLeadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
