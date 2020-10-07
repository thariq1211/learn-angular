import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getServices() {
    return this.http.get('https://5f61ab8607c1770016c523a2.mockapi.io/api/andro/v1/services');
  }
}
