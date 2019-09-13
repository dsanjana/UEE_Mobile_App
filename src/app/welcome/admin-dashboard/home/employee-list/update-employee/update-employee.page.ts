import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.page.html',
  styleUrls: ['./update-employee.page.scss'],
})
export class UpdateEmployeePage implements OnInit {

  constructor(public popOverContoller: PopoverController) { }

  ngOnInit() {
  }

  // ionViewWillEnter() {
  //   DismissClick();
  // }

  // async DismissClick() {
  //   await this.popOverContoller.dismiss();
  //     };

}
