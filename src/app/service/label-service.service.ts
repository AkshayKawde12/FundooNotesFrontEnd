import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LabelServiceService {

  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
      .set('token', localStorage.getItem('token'))
  
  }

  constructor(
    private http: HttpClient
  ) { }


  url = environment.baseUrl;

  public postRequest(data,labelData) {
    console.log("request data--->", data,labelData);
  
    return this.http.post(this.url + data.path,labelData, this.httpOptions);
  }

  public getRequest(url) {
    console.log("path --->", url);
    return this.http.get(this.url + url.path, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }
  public putRequest(url: any, noteId, data: any): any {
    console.log("path---->", this.url + url);
    console.log(data);
    var fullPath = this.url + url + '?noteId=' + noteId
    return this.http.put(fullPath,
      data,
      {
        headers: new HttpHeaders().set('token', localStorage.getItem('token')),
      });
  }

  public putRequestDelete(url) {
    console.log("path--->", url);
    return this.http.put(this.url + url, {}, {
      headers: new HttpHeaders().set('token', localStorage.getItem('token'))
    });
  }
}
