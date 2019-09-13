import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StudentListPage } from './student-list.page';
import { DashboardPopoverComponent } from './dashboard-popover/dashboard-popover.component';
import { ScardPopoverComponent } from './scard-popover/scard-popover.component';

const routes: Routes = [
  {
    path: '',
    component: StudentListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [DashboardPopoverComponent, ScardPopoverComponent],
  declarations: [StudentListPage,  DashboardPopoverComponent, ScardPopoverComponent]
})
export class StudentListPageModule {}
