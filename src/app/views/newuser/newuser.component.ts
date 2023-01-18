import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  UserForm = new FormGroup({
    //campos form
    name_user: new FormControl('', [Validators.required , Validators.maxLength(25)]),
    name: new FormControl('',  [Validators.required , Validators.maxLength(25)]),
    surname: new FormControl('',  [Validators.required , Validators.maxLength(25)]),
    email: new FormControl('', [Validators.required ,Validators.email]),
    photo: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor() { }

  ngOnInit(): void {
  }

  PostForm(form: any) {
    console.log(form);

  }

}
