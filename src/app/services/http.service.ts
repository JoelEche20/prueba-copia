import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl: string = "https://itunes.apple.com/search?term=";

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(this.baseUrl + url);
  }

}