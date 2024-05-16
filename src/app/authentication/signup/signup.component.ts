import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { passwordMatchValidator } from 'src/app/core/custom-directive/password-match.directive';
import { User } from 'src/app/core/interfaces/auth';
import { AuthapiService } from 'src/app/core/service/authapi.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],

})
export class SignupComponent {


  signupForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?:[a-zA-z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmpassword: ['', [Validators.required]]

  }, 
  {validator: passwordMatchValidator
  })
  // passwordMatchValidator(frm: FormGroup) {
  //   return frm.controls['password'].value === frm.controls['confirmpassword'].value ? null : {mismatch: true};
  // }
  constructor(private fb: FormBuilder, private authservice: AuthapiService, public messageService: MessageService, private router: Router) {

  }

  get name() {
    return this.signupForm.controls['name'];
  }
  get email() {
    return this.signupForm.controls['email'];
  }
  get password() {
    return this.signupForm.controls['password'];
  }
  get confirmpassword() {
    return this.signupForm.controls['confirmpassword'];
  }


  submitSignUpDetail() {
    const signupDetail = { ...this.signupForm.value }
    delete signupDetail.confirmpassword
    this.authservice.signUpUser(signupDetail as User).subscribe((res: any) => {
      this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'SignUp Sucessful' });
      this.router.navigate(['auth/login'])
    },
    (error: any) => {
    this.messageService.add({ severity: 'error', summary: 'Error', detail:'Something Went Worng' });
    }
    )
  }
}
