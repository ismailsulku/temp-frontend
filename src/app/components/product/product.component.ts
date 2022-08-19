import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

//apideki datayı karşılamak için model oluşturulduktan sonra bu kısımda datayı karşılarız..

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[]=[];//amaç ürünleri getirmek buradaki datayı doldurmak.
  dataLoaded = false;

  constructor(private productService:ProductService) { } // constructor'ın amacı ilgili componenti bellekte oluşturmaktır. Contructorda datayı initialize etmek dışında başka bir işlem yapılmaması gerekir.
  //sadece bu classta geçerli  (başlangıç datası newlenebilir..)

  //ngOnInit component ilk açıldığında çalışan koddur.
  ngOnInit(): void {
    this.getProducts();
  }

  //apiye bağlanmak için operasyonlar yazılır.
  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true;
    })
    console.log();                             
  }

}
