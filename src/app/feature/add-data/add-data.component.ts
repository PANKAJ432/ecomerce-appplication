import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent {
  studentForm!: FormGroup
  passedData: any
  constructor(private fb: FormBuilder, public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.passedData = config.data
    
    this.studentForm = this.fb.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      quantity: ['', [Validators.required]]

    })


  }
  ngOnInit() {
    this.studentForm?.controls['code'].patchValue(this.passedData.code)
    this.studentForm?.controls['name'].patchValue(this.passedData.name)
    this.studentForm?.controls['category'].patchValue(this.passedData.category)
    this.studentForm?.controls['quantity'].patchValue(this.passedData.quantity)
  }
  submit(form: any) {
    
    this.ref.close(form.value);
  }
}
