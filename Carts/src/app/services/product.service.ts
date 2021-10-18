import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  @Injectable()

  products: Product[] = [];

  configUrl="http://localhost:9080/inventory-management/inventory";

  constructor(private http: HttpClient) {
    this.getData();
  }
  getProducts(): Product[] {
    //To-do: get products from API and return an observable
    return this.products;
  }

  getData() {
    this.http.get(this.configUrl).subscribe((data: any) => {
      for (let item of data.itemList){
        this.products.push(new Product(item.pid, item.name, item.description, item.price, item.url));
      }
    });
    console.log(this.products)
  }
}
