import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  ImageArray: any = [];

  constructor(public navCtrl: NavController) {
    this.ImageArray = [
      {'image': '../assets/img/s1.png'},
      {'image': '../assets/img/s2.png'},
      {'image': '../assets/img/s3.png'},
      {'image': '../assets/img/s4.png'},
      {'image': '../assets/img/s5.png'}
    ];
  }

  ngOnInit() {
  }

}
