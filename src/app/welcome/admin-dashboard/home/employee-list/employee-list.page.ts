import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';
import { CardPopoverComponent } from './card-popover/card-popover.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.page.html',
  styleUrls: ['./employee-list.page.scss'],
})
export class EmployeeListPage implements OnInit {

  constructor(public popOverContoller: PopoverController,
              public toastController: ToastController) { }

  ngOnInit() {
  }

  async presentPopover() {
    const popover = await this.popOverContoller.create(({
      component: CardPopoverComponent,
      event
    }));
    return await popover.present();
  }

  async presentToastAfterClickBookmark() {
    const toast = await this.toastController.create({
      message: 'Saved to bookmarks.',
      duration: 3000
    });
    toast.present();
  }
}
