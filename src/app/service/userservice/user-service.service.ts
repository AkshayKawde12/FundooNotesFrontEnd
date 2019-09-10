import { Injectable } from '@angular/core';
import {HttpserviceService} from '../../service/httpservice.service'
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers:new HttpHeaders().set('content-type','application/json')
  .set('Access-control-allow-origin','*')
  .set('Access-control-allow-Headers','*')
};
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService:HttpserviceService) { }
  login(data){
console.log(" data in user service ",data);

    return this.httpService.postRequest('login',data);
  }
}
