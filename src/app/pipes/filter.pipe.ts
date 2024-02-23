import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): unknown {
    if(value.length === 0 || filterString === '' || typeof filterString === 'undefined') return value;
    const resultArray = [];
    for(const item of value) {
      if(item.name.toLowerCase().includes(filterString.toLowerCase())) resultArray.push(item); 
    }
    return resultArray;
  }
}