import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../Models/RegisterModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  RegUser: RegisterModel = new RegisterModel();

  constructor(
    private toastr: ToastrService) { }

  RegisterSubmit() {
    if (!(this.RegUser.email && this.RegUser.firstName && this.RegUser.lastName && this.RegUser.password && this.RegUser.passwordConfirm && this.RegUser.city) ){
      this.toastr.error('Не все поля заполнены');
    } else if (!this.RegUser.email.includes('@gmail')) {
      this.toastr.error('Недопустимый домен почты');
    } else if (this.RegUser.password !== this.RegUser.passwordConfirm) {
      this.toastr.error('Пароли не совпадают');
    } else if (this.RegUser.password.length < 8) {
      this.toastr.error('Слишком короткий пароль');
    } else if (!this.RegUser.password.match(/\d/)) {
      this.toastr.error('Пароль должен содержать цифру');
    } else if (!this.RegUser.password.match(/[A-Z]/)) {
      this.toastr.error('Пароль должен содержать заглавную букву');
    } else {
            this.toastr.success('Вы зарегистрировались');
        }
  }
  ngOnInit() {
  }


  onFileSelected(event){

  }
}
