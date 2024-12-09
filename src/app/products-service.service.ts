import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  public url = "https://fakestoreapi.com/users";

  constructor(private http: HttpClient) { }

  getdata(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
