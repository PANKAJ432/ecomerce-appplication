import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() submitForm:string='';
  // formValid: boolean = false;
  @Output() formData = new EventEmitter<any>();
  @Output() formValid = new EventEmitter<any>();

  tooltipText = 'This is a tooltip.';
  dropdownForm: FormGroup;

// Today  Code
@Input() label!: string;
@Input() placeholder!: string;
@Input()  value: string = '';



// 

  constructor(private fb:FormBuilder) {
    this.dropdownForm =this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      branchNumber: ['', Validators.required],
      telephoneNumber: ['', Validators.required],
      
    });
  }

  ngOnChanges() {
    debugger
    if (this.submitForm) {
      this.submitFormData();
    }
  }

  submitFormData() {
    debugger
    if (this.dropdownForm.valid) {
      // console.log('Form Data Submitted:', this.dropdownForm.value);
      // Emit an event or handle the form submission as needed
    this.formData.emit( this.dropdownForm.value);
    this.dropdownForm.reset();
    
     
    }
  

  }

  // isFormValid(): boolean {
  //   this.formValid = this.dropdownForm.valid;
  //   return this.formValid;
  // }
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
  
  submitForms(){
  }
 
}
