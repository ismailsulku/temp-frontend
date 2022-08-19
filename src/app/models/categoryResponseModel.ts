import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategoryResponseModel extends ResponseModel{ //CategoryResponseModel ResponseModel'dekileri de kullanıyor..
    data:Category[]
}