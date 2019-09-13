import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-attendance-and-result',
  templateUrl: './attendance-and-result.page.html',
  styleUrls: ['./attendance-and-result.page.scss'],
})
export class AttendanceAndResultPage implements OnInit {

  segment: string;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public toastController: ToastController) {
    this.segment = 'attendances';
  }

  ngOnInit() {
  }

  async presentAlert_result() {
    const alert = await this.alertCtrl.create({
    message: 'Do you want to confirm !!!',
    subHeader: 'Mark New Result',
    buttons: [
      {text: 'Confirm'},
      {text: 'Dismiss'}
    ]
   });
    await alert.present();
}

async presentAlert_attendance() {
  const alert = await this.alertCtrl.create({
  message: 'Do you want to confirm !!!',
  subHeader: 'Mark Attendance',
  buttons: [
    {text: 'Confirm'},
    {text: 'Dismiss'}
  ]
 });
  await alert.present();
}

async presentToast() {
  const toast = await this.toastController.create({
    message: 'Your settings have been saved.',
    duration: 2000
  });
  toast.present();
}

}
