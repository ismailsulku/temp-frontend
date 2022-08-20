import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

//apideki datayı karşılamak için model oluşturulduktan sonra bu kısımda datayı karşılarız..

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[]=[];//amaç ürünleri getirmek buradaki datayı doldurmak.
  dataLoaded = false;

  constructor(private productService:ProductService , private activatedRoute:ActivatedRoute) { } // constructor'ın amacı ilgili componenti bellekte oluşturmaktır. Contructorda datayı initialize etmek dışında başka bir işlem yapılmaması gerekir.
  //sadece bu classta geçerli  (başlangıç datası newlenebilir..)

  //ngOnInit component ilk açıldığında çalışan koddur.
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })

  }

  //apiye bağlanmak için operasyonlar yazılır.
  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true;
    })                          
  }

  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true;
    })                          
  }

}
