import { Product } from "./product";
import { ResponseModel } from "./responseModel";

//backend den gelecek olan verileri karşılayacak model oluşturulur.

export interface ProductResponseModel extends ResponseModel{ //ResponseModel base
    data:Product[],
}