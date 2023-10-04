import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { DetailsComponent } from '../details/details.component';
import { FilterPipe } from '../filter.pipe';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import { UpdateEmpComponent } from '../update-emp/update-emp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    DetailsComponent,
    AddemployeeComponent,
    UpdateEmpComponent,
    MatConfirmDialogComponent,
    FilterPipe
  
  ],
  imports: [
 
    CommonModule,
    DashboardRoutingModule,
  
    NgxPaginationModule,
    FormsModule,
    MaterialModule,
  ]
})
export class DashboardModule { }
