import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:44314/api/products/getall"
  constructor(private httpClient:HttpClient) { }
  
  getProducts():Observable<ProductResponseModel>{
    return this.httpClient.get<ProductResponseModel>(this.apiUrl) // apiUrl e http tarafından get isteği yapılır. Gelen datayı ProductResponseModel tipine dönüştür. Çalıştırman için subscribe olmak gerekir. Gelen response için products arrayindeki datayı getir.                           
  }

}
