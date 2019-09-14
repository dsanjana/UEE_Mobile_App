import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-text-caster',
  templateUrl: './text-caster.page.html',
  styleUrls: ['./text-caster.page.scss'],
})
export class TextCasterPage implements OnInit {

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
