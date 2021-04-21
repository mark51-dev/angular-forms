import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this. form = new FormGroup(
      {}
    );
  }

  submitForm() {
    console.log(this.form);
  }
}