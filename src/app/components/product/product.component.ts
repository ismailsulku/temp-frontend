import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

//apideki datayı karşılamak için model oluşturulduktan sonra bu kısımda datayı karşılarız..

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[]=[];//amaç ürünleri getirmek buradaki datayı doldurmak.
  dataLoaded = false;
  filterText=""; //html de [(ngModel)] yazarak burayla bağlıyoruz. Daha sonra appmodule da FormsModule import ediyoruz.

  constructor(
    private productService:ProductService , 
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService, 
    private cartService:CartService
    ) { } // constructor'ın amacı ilgili componenti bellekte oluşturmaktır. Contructorda datayı initialize etmek dışında başka bir işlem yapılmaması gerekir.
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

  addToCart(product:Product){
    this.toastrService.success("Sepete eklendi", product.productName)
    this.cartService.addToCart(product);
  }

}
