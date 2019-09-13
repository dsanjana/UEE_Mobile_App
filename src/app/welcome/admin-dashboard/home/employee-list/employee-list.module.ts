import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployeeListPage } from './employee-list.page';
import { CardPopoverComponent } from './card-popover/card-popover.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [CardPopoverComponent],
  declarations: [EmployeeListPage, CardPopoverComponent]
})
export class EmployeeListPageModule {}
