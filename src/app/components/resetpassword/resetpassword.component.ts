import { Component, OnInit } from '@angular/core';
//import { PasswordModel } from 'src/app/model/password-model';
//import { UserModel } from 'src/app/model/user-model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import {  HttpserviceService } from 'src/app/service/httpservice.service'
import { ActivatedRoute } from '@angular/router';
import { PasswordModel } from 'src/app/model/password-model';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  password: PasswordModel = new PasswordModel();
  resetpasswordForm: FormGroup;
  token: string;

  constructor(private snackBar: MatSnackBar,
    private httpservice: HttpserviceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log("onInit()::resetpassword")
    this.resetpasswordForm = this.formBuilder.group(
      {
        'password': new FormControl(this.password.password, [Validators.minLength(6)]),
        'confirmPassword': new FormControl(this.password.confirmPassword, [Validators.minLength(6)])
      }
    )
    this.token = this.route.snapshot.paramMap.get('token');
    console.log(this.token)
  }
  onReset() {
    if (this.password.password != this.password.confirmPassword) throw "Password and Confirm Password does not match";
    if (this.password.password === '' || this.password.confirmPassword === '') throw "Empty fields";
    this.httpservice.putRequest("resetpassword/" + this.token, this.password).subscribe(
      (response: any) => {
        if (response.statusCode === 200) {
          console.log(response);
          this.snackBar.open(
            "Password reset Successfully",
            "undo",
            { duration: 2500 }
          )
          // this.router.navigate(['/login'])
        } else {
          console.log(response);
          this.snackBar.open(
            "Password reset Failed",
            "undo",
            { duration: 2500 }
          )
        }
      }
    )

  }

}

