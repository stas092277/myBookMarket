import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../shared/Models/RegisterModel';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, FormBuilder, ValidationErrors } from '@angular/forms';
import { passwordMatchValidator } from '../shared/Validators/passwordMatchvalidator';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  RegUser: RegisterModel = new RegisterModel();
  public authForm: FormGroup;
  data: string = null;

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder) {
     }

  ngOnInit() {
    this.authForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[а-яА-Я]+$/)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[а-яА-Я]+$/)
      ]),
      middleName: new FormControl('', [
        Validators.pattern(/^[а-яА-Я]+$/)
      ]),
      city: new FormControl('', []),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ]),
      about: new FormControl('', [ Validators.maxLength(250)]),
      imgUrl: new FormControl('', []),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(7),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,15}$/)
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        passwordMatchValidator
      ])
    });
  }

  getEmailErrorMessage() {
    return this.authForm.get('email').hasError('required') ? 'Введите почту' :
      // this.authForm.get('email').hasError('email') ? 'Отсутствует домен почты' :
        this.authForm.get('email').hasError('pattern') ? 'Неверная форма почты' :
          '';
  }

  getFIOErrorMessage(control: string) {
    return this.authForm.get(control).hasError('required') ? 'Заполниет поле' :
    this.authForm.get(control).hasError('pattern') ? 'Должно содержать только русские символы' :
    '';
  }

  getPassErrorMessage() {
    return this.authForm.get('password').hasError('required') ? 'Заполниет поле' :
      this.authForm.get('password').hasError('minlength') ? 'Пароль содержит меньше 7 символов' :
        this.authForm.get('password').hasError('pattern') ? 'Пароль должен содержать цифру, заглавную и строчную букву и только латиницу' :
      '';
  }

  getPassConfErrorMessage() {
    return this.authForm.get('passwordConfirm').hasError('required') ? 'Заполниет поле' :
      this.authForm.get('passwordConfirm').hasError('NoPasswordMatch') ? 'Пароли не совпадают' :
      '';
  }

  RegisterSubmit(): void {
    if (this.authForm.valid) {
      this.authForm.get('password').setValue(encodeURIComponent(this.authForm.get('password').value));
      this.authForm.get('passwordConfirm').setValue(encodeURIComponent(this.authForm.get('passwordConfirm').value));
      this.data = JSON.stringify(this.authForm.value);
    }
  }


}

