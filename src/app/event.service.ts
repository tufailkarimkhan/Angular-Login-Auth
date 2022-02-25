import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private getAllProductsUrl="http://localhost:3001/product"
  private addProductUrl="http://localhost:3001/product"

  constructor( private http:HttpClient) { }
/*Here you can get all product information*/ 
  AllProducts(){
    return this.http.get(this.getAllProductsUrl)
  }
  /*Add product */ 
  Product(value:string){
    return this.http.post(this.addProductUrl,value)
  }

}
