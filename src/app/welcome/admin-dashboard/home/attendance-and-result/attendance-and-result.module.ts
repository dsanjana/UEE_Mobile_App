import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AttendanceAndResultPage } from './attendance-and-result.page';

const routes: Routes = [
  {
    path: '',
    component: AttendanceAndResultPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AttendanceAndResultPage]
})
export class AttendanceAndResultPageModule {}
