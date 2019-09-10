import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const httpOptions = {
  headers: new HttpHeaders().set( 'Content-Type', 'application/json')
  .set('token',localStorage.getItem('token'))

}
@Injectable({
  providedIn: 'root'
})

export class NoteServiceService {

  
  constructor(
    private http: HttpClient
  ) { }
  noteurl = environment.noteUrl;
url1:string
  public postRequest(url: string, data: any) {
    console.log("request data--->", url, data)
    return this.http.post(this.noteurl + url, data, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }

  public getRequest(url) {
    console.log("path --->", url);
    return this.http.get(this.noteurl+url.path, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }
  public putRequest(url: any): any {
    console.log("path---->",this.noteurl + url );
    console.log("http://localhost:8080/notes/delete?noteId=48",localStorage.getItem('token'));
    let headers = new Headers();
    headers.append('token', localStorage.getItem('token'));
    
    // let options = new RequestOptions({ headers: headers });
    return this.http.put(this.noteurl+url,{},{
      headers: new HttpHeaders().set('token', localStorage.getItem('token')),
    });
  }
  
}
