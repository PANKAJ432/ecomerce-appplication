import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { TableModule } from 'primeng/table';
import { TableComponent } from './table/table.component';
import { AddDataComponent } from './add-data/add-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import {CardModule} from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { PaginatorModule } from 'primeng/paginator';
import { DashboradComponent } from './dashborad/dashborad.component';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputMaskModule } from 'primeng/inputmask';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from '../shared/button/button.component';
import { InputComponent } from '../shared/input/input.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    TableComponent,
    AddDataComponent,
    DashboradComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule,
    // ButtonModule,
    DynamicDialogModule,CardModule,ConfirmDialogModule,ConfirmPopupModule,ToastModule,PaginatorModule,FormsModule,DropdownModule,ProgressSpinnerModule,
    InputMaskModule,SharedModule,
    TooltipModule
  ]
})
export class FeatureModule { }
