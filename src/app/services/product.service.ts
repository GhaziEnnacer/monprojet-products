import { Injectable } from '@angular/core';
import { Product } from '../domain/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  url = 'http://localhost:3000/products/';

  constructor(private http: HttpClient) { }

  public getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
