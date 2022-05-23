import { Pipe, PipeTransform } from '@angular/core';
import { Developer } from './models/developer';

@Pipe({
  name: 'incomplete'
})
export class IncompletePipe implements PipeTransform {

  transform(devs: Developer[], showAll: boolean): Developer[] {
    if(showAll){
      return devs;
    }

    let result: Developer[] = [];
    devs.forEach((dev, index, arr) =>{
      if(!dev.active){
        result.push(dev);
      }
    });
    return result;
  }

}
