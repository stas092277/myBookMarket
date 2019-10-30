import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../Models/RegisterModel';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  RegUser: RegisterModel = new RegisterModel();
  public authForm: FormGroup;

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder) {
     }



  // RegisterSubmit() {
  //   if (!(this.RegUser.email && this.RegUser.firstName && this.RegUser.lastName && this.RegUser.password && this.RegUser.passwordConfirm && this.RegUser.city) ){
  //     this.toastr.error('Не все поля заполнены');
  //   } else if (!this.RegUser.email.includes('@gmail')) {
  //     this.toastr.error('Недопустимый домен почты');
  //   } else if (this.RegUser.password !== this.RegUser.passwordConfirm) {
  //     this.toastr.error('Пароли не совпадают');
  //   } else if (this.RegUser.password.length < 8) {
  //     this.toastr.error('Слишком короткий пароль');
  //   } else if (!this.RegUser.password.match(/\d/)) {
  //     this.toastr.error('Пароль должен содержать цифру');
  //   } else if (!this.RegUser.password.match(/[A-Z]/)) {
  //     this.toastr.error('Пароль должен содержать заглавную букву');
  //   } else {
  //           this.toastr.success('Вы зарегистрировались');
  //       }
  // }


  ngOnInit() {
    this.authForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      middleName: new FormControl('', []),
      city: new FormControl('', []),
      email: new FormControl('', [Validators.required, Validators.email]),
      about: new FormControl('', []),
      imgUrl: new FormControl('', []),
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required])
    });
  }

  RegisterSubmit(): void{
    this
  }

  getErrorMessage() {
    return this.authForm.hasError('required') ? 'You must enter a value' :
        this.authForm.hasError('email') ? 'Not a valid email' :
            '';
  }

}
