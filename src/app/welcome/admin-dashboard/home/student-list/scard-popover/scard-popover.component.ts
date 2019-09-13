import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-scard-popover',
  templateUrl: './scard-popover.component.html',
  styleUrls: ['./scard-popover.component.scss'],
})
export class ScardPopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController,
              public alertController: AlertController,
              public toastController: ToastController) { }

  ngOnInit() {}

  doc() {
    window.open('');
    this.popoverController.dismiss();
}
close() {
    this.popoverController.dismiss();
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
          this.close();
        }
      }, {
        text: 'Okay',
        handler: () => {
          this.presentToastAfterDeleteConfirm();
          this.close();
          console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();
}
  async presentToastAfterDeleteConfirm() {
    const toast = await this.toastController.create({
      message: 'Your operation succeeded.',
      duration: 3000
    });
    toast.present();
  }
}
