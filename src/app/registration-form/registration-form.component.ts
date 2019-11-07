import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../shared/Models/RegisterModel';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, FormBuilder, ValidationErrors } from '@angular/forms';
import { CustomValidators } from '../shared/Validators/passwordValidator';
import { passwordMatchValidator } from '../shared/Validators/passwordMatchvalidator';

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
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(/[А-я]/)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern(/[А-я]/)
      ]),
      middleName: new FormControl('', [
        Validators.pattern(/[А-я]/)
      ]),
      city: new FormControl('', []),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
      about: new FormControl('', [ Validators.maxLength(250)]),
      imgUrl: new FormControl('', []),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(7),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        CustomValidators.patternValidator(/\d/, { hasNumber: true }),
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required
      ])
    });
  }

  RegisterSubmit(): void{
  }

  getEmailErrorMessage() {
    return this.authForm.get('email').hasError('required') ? 'Введите почту' :
        this.authForm.get('email').hasError('email') ? 'Отсутствует домен почты' :
          this.authForm.get('email').hasError('pattern') ? 'Содержит недопустимы символы' :
            '';
  }

  getFIOErrorMessage(control: string) {
    return this.authForm.get(control).hasError('required') ? 'Заполниет поле' :
    this.authForm.get(control).hasError('pattern') ? 'Должно содержать только русские символы' :
            '';
  }

  getPassErrorMessage() {
    return this.authForm.get('password').hasError('required') ? 'Заполниет поле' :
      this.authForm.get('password').hasError('minLength') ? 'Пароль содержит меньше 7 символов' :
        this.authForm.get('password').hasError('pattern') ? 'Содержит недопустимые символы' :
      '';
  }



}
