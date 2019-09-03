import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {


  baseurl = environment.baseUrl;
    constructor(private http: HttpClient) { }
    //without toke post 
    public postRequest(url, data ){
      console.log(url ,data)
      return this.http.post(this.baseurl + url,data);
    }

    
    public putRequest(url :any, data: any ):any{
      return this.http.put(this.baseurl + url,data);
    }
    public deleteRequest(url :any):any{
      return this.http.delete(this.baseurl + url);
    }
    public getRequest(url :any):any{
  return this.http.get(this.baseurl + url);
    }
    public forgetRequest(url : any,data:any) : any{
      return this.http.get(this.baseurl + url);
    }

   


}
