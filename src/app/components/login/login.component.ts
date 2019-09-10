import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { HttpserviceService } from 'src/app/service/httpservice.service';
import {UserServiceService} from '../../service/userservice/user-service.service'
import { UserModel } from 'src/app/model/user-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 user :UserModel=new UserModel();
  

  constructor(private userService:UserServiceService,private snackBar:MatSnackBar, private router:Router) { }

  ngOnInit() { }
  emailId = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  password = new FormControl('', [
    Validators.required
  ]);

  login(){
    var data={
      'emailId':this.emailId.value,
      'password':this.password.value
    }
    
    console.log("EmailId"+data.emailId );
    console.log("password"+data.password);
    

    this.userService.login(data).subscribe( (response:any)=>{
      console.log(response);  
      if (response.statusCode == 200) {
                console.log("--->",response);
                localStorage.setItem('firstName', response.firstName);
                localStorage.setItem('lastName', response.lastName);
                localStorage.setItem('email', response.emailId);
                localStorage.setItem('token', response.token)
                this.snackBar.open(
                  "login sucessfully",
                  "undo",
                  { duration: 2500 }
                )

                this.router.navigate(['dashboard'])
              
              } else {
                console.log(response);
                this.snackBar.open(
                  "Failed,please input valid information",
                  "close",
                { duration: 2500 }
              )
              this.router.navigate(['login'])
            }
          }
    );
        

      
   
    
    
    
  }

}
