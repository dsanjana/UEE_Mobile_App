import { Component, OnInit, OnDestroy } from '@angular/core';
import { PopoverController, AlertController, ToastController } from '@ionic/angular';

import { DashboardPopoverComponent } from './dashboard-popover/dashboard-popover.component';
import { ScardPopoverComponent } from './scard-popover/scard-popover.component';
import { StudentService } from './student.service';
import { Student } from './student.module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.page.html',
  styleUrls: ['./student-list.page.scss'],
})
export class StudentListPage implements OnInit {
  students: Student[];
  private studentSub: Subscription;

  constructor(public popOverContoller: PopoverController,
              public alertController: AlertController,
              public toastController: ToastController,
              public studentService: StudentService
            ) { }

  ngOnInit() {
    this.studentSub = this.studentService.places.subscribe(student => {
      this.students = student;
    });
  }

  async presentPopover() {
    const popover = await this.popOverContoller.create(({
      component: DashboardPopoverComponent,
      event
    }));
    return await popover.present();
  }

  async presentCardPopover() {
    const popover = await this.popOverContoller.create(({
      component: ScardPopoverComponent,
      event
    }));
    return await popover.present();
  }

  async presentToastAfterDeleteConfirm() {
    const toast = await this.toastController.create({
      message: 'Your operation succeeded.',
      duration: 3000
    });
    toast.present();
  }

  async presentToastAfterClickBookmark() {
    const toast = await this.toastController.create({
      message: 'Saved to bookmarks.',
      duration: 3000
    });
    toast.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: 'Are you sure want to delete this addmission ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.presentToastAfterDeleteConfirm();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }


  // navigateToAdd() {
  //   this.router.navigate(['add']);
  // }
}
