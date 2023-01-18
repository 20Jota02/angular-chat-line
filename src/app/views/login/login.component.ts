import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    //campos form
    email: new FormControl('', [Validators.required , Validators.maxLength(25)]),
    password: new FormControl('', Validators.required),
  })

  constructor(
    private loginServices : LoginService ,
    private route : Router
  ) { }

  ngOnInit() {
    const id_user = localStorage.getItem('id_user');

    id_user == null || id_user == undefined ? false : this.route.navigate(['/home'])
  }

  PostForm (form : any ) {
    console.log(form);

    this.loginServices.loginUser(form).subscribe(login => {
      if (login.status == 'success') {
        localStorage.setItem('id_user' , login.results.id_user)
        localStorage.setItem('nameuser' , login.results.nameuser)
        localStorage.setItem('photo' , login.results.photo)
        this.route.navigate(['/home'])
      }
    })
    
  }

}
