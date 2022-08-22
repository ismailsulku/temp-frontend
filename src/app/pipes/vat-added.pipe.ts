import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  //html de vatAdded yazıldığında burada transform çalışır. Value gönderilen ilk değer (unitPrice) , rate ise uygulananmak istenen değer (%10)
  transform(value: number, rate: number): number{
    return value+(value*rate/100); //return de yüzdelik hesap yapıldı.
  }

}

//pipe: elinizdeki veriyi görsel olarak daha farklı şekilde göstermek için kullanılır.  