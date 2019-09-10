import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user-model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpserviceService } from 'src/app/service/httpservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  emailId = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(private router:Router,private snackBar: MatSnackBar, private httpservice: HttpserviceService, public formBuilder: FormBuilder) {}

  ngOnInit() 
  {
    
  }


  onForgotpassword()
  {
    console.log("forgotpassword",this.emailId.value);
    var data={
      'emailId':this.emailId.value
    }
    this.httpservice.postRequest('forgotpassword', data).subscribe(
      (response: any) => {
        if (response.statusCode === 200) {
          console.log(response);
          this.snackBar.open(
            "please check your email",
            "thank you",
            { duration: 2500 }
          )
          this.router.navigateByUrl('login')
       
        } else {
          console.log(response);
          this.snackBar.open(
            "Failed",
            "undo",
          { duration: 2500 }
        )
        this.router.navigateByUrl('forgotpassword')
        
      }

    } )
  }
}

