import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customePipe'
})
export class CustomePipePipe implements PipeTransform {

  transform(value: any, type: string): unknown {
    if (type === "name") {
      return value.firstname + " " + value.lastname;
    }
    else if (type === "address") {
      return value.city + " " + value.street + " " + value.zipcode;
    }
    else {
      return value;
    }
  }

}
