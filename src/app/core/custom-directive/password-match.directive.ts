import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: any=(frm: FormGroup) : ValidationErrors | null => { 
    return frm.controls['password'].value === frm.controls['confirmpassword'].value ? null : {mismatch: true};
    // return control.value.password === control.value.confirmpassword
    // ? null
    // : { passwordMisMatch: true };
   
//     const password =frm.controls['password'].value ;
//     const confirmpassword = frm.controls['confirmpassword'].value ;

//     if(!password || !confirmpassword){
//         return null
//     }
// return password.value === confirmpassword.value ? null: { passwordMisMatch:true}

}