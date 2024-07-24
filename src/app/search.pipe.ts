import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   if(!value)  return null; //  if no data ,return null

   if(!args) return value   // if no search value ,return data

   args= args.toLowerCase()

   return value.filter((items:any)=>{
     return JSON.stringify(items).toLowerCase().includes(args)
   })
  }

}


/// need to generate ng g pipe search
