import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.page.html',
  styleUrls: ['./add-new-employee.page.scss'],
})
export class AddNewEmployeePage implements OnInit {

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
