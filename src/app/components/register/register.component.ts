import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserModel } from 'src/app/model/user-model';
import { HttpserviceService } from 'src/app/service/httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  user: UserModel = new UserModel();
  registerForm: FormGroup;
  constructor(private snackBar: MatSnackBar,private router:Router,
              private httpservice: HttpserviceService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
     {
        
        'firstName': new FormControl('', [Validators.required]) ,
        'lastName': new FormControl('', [Validators.required]),
        'emailId': new FormControl('', [Validators.email,Validators.required]),
        'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
        'mobileNumber': new FormControl('', [Validators.required,Validators.minLength(8)])
      }
    )
  }

  submitted=false;

  get f()
  {
    return this.registerForm.controls;
  }


  onRegister() {
      this.submitted==true;
      if(this.registerForm.invalid)
      {
        return;
      }
    console.log("Registration",this.registerForm.value);
     this.httpservice.postRequest('register', this.user).subscribe(
       (response: any) => {
         if (response.statusCode === 200) {
           console.log(response);
           this.snackBar.open(
             "Registered Successfully",
             "undo",
             { duration: 2500 }
           )
           this.router.navigateByUrl('login');
         } else {
           console.log(response);
           this.snackBar.open(
             "Registration Failed",
             "undo",
           { duration: 2500 }
         )
         this.router.navigateByUrl('register');
       }

     }
   )
   }

   
}