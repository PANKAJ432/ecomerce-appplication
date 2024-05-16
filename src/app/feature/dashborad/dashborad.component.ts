import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { City } from 'src/app/core/interfaces/auth';
import { TableApisService } from 'src/app/core/service/table-apis.service';

// interface City {
//   name: string;
//   code: string;
// }
@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent {
  names: string = '';
  emails: string = '';
  lable = 'Form';
  submitForm: any

  functioncall(event: any) {
    debugger
    this.submitForm = event
    console.log('functioncall', this.submitForm);
  }
  submitedData(formData: any) {
    console.log("submited Form Data", formData)
  }

  
  dropdownForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.dropdownForm =this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      branchNumber: ['', Validators.required],
      telephoneNumber: ['', Validators.required],

    });
  }

  ngOnInit() {



  }
  get name() {
    return this.dropdownForm.controls['name'];
  }
  get email() {
    return this.dropdownForm.controls['email'];
  }
  get branchNumber() {
    return this.dropdownForm.controls['branchNumber'];
  }
  get telephoneNumber() {
    return this.dropdownForm.controls['telephoneNumber'];
  }



}