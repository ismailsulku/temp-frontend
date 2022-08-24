import { ResponseModel } from "./responseModel";

export interface SingleResponseModel<T> extends ResponseModel{ //ResponseModel daki success ve message ı SingleResponse un objesine (extends) yerleştirilir.
    data:T 
}