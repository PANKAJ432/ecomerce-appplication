import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthapiService } from 'src/app/core/service/authapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]

  })
  constructor(private fb: FormBuilder, private authservice: AuthapiService, private router: Router, public messageService: MessageService,) {

  }
  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }

  loginUser() {
    const { email, password } = this.loginForm.value;
    this.authservice.logUserByEmail(email as string).subscribe((res: any) => {
      if (res.length > 0 && res[0].password === password) {
        sessionStorage.setItem('email', email as string)
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Log In Sucessful' });
        this.router.navigate(['/dashboard'])
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Worng Email & Password ' });

      }
    },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something Went Worng' });

      })
  }
}
