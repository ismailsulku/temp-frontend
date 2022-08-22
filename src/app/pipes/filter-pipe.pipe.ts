import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {

    filterText = filterText? filterText.toLocaleLowerCase():"" //filterTexc var mı varsa küçük harflere döndür. Yoksa null.
    return filterText? value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  } // filterText var mı varsa productları gez ve ve aradığın productı küçük harflere çevir. indexOf ile aradığın filterText çevrilen stringte var mı?(true)
    // (!==-1 varsa demektir).. yoksa verilen değeri döndür (:value) 

    // html de ngIf döngüsüne filterPipe eklenir.

    // Örnek olarak arama ifadesine "of" yazıldığında "chai" ürününde "of" var mı diye bakılır. Olmadığı için -1 olur arraye girmez. "Tofu" ürün isminde "of" olduğu için indexOf 1 döndürür,
    // filter yeni array oluşturur ve bu arrayin içine "tofu" girer ve filter işlemi yapılmış olur.

}
