import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.page.html',
  styleUrls: ['./add-new-student.page.scss'],
})
export class AddNewStudentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    // const email = form.value.email;
    // const password = form.value.password;
    // console.log(email, password);

  }

}
