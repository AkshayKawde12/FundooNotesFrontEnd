import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {


  baseurl = environment.baseUrl;
  
  constructor(private http: HttpClient) { }
  //without toke post 
  public postRequest(url: string, data: any) {
    console.log("request data--->",url, data)
    return this.http.post(this.baseurl + url, data, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }


  public putRequest(url: any, data: any): any {
    return this.http.put(this.baseurl + url, data, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }

  public deleteRequest(url: any): any {
    return this.http.delete(this.baseurl + url);
  }

  public getRequest(url) {
    console.log("path --->", url);
    return this.http.get(this.baseurl+url.path, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }

  public forgetRequest(url: any, data: any): any {
    return this.http.get(this.baseurl + url);
  }




}
