import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:44314/api/"
  constructor(private httpClient:HttpClient) { }
  
  getProducts():Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath) // apiUrl e http tarafından get isteği yapılır. Gelen datayı ProductResponseModel tipine dönüştür. Çalıştırman için subscribe olmak gerekir. Gelen response için products arrayindeki datayı getir.                           
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getbycategory?categoryId=" + categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath) // apiUrl e http tarafından get isteği yapılır. Gelen datayı ProductResponseModel tipine dönüştür. Çalıştırman için subscribe olmak gerekir. Gelen response için products arrayindeki datayı getir.                           
  }

}
