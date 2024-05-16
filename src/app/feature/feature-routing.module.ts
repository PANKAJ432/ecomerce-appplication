import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { AddDataComponent } from './add-data/add-data.component';
import { DashboradComponent } from './dashborad/dashborad.component';

const routes: Routes = [
    {
      path: 'table',
      component: TableComponent,
      data:{
        title:'Table'
      }
    },
    // {
    //   path: 'addedittable',
    //   component: AddDataComponent
    // },
    {
      path:'dashboard',
      component:DashboradComponent,
      data:{
        title:'DashBoard'
      }
    }
    
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
