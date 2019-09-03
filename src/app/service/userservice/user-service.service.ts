import { Injectable } from '@angular/core';
import {HttpserviceService} from '../../service/httpservice.service'
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
