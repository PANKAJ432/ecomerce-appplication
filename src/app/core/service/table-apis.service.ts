import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../interfaces/auth';

@Injectable({
    providedIn: 'root'
})


export class TableApisService {

    constructor(public http: HttpClient) { }

    // Get list of Product
    getProductsData() {
        
        return this.http.get('http://localhost:3000/list');
    }

    // Add Product
    postSProductData(item: any) {
        
        return this.http.post('http://localhost:3000/list', item);
    }

    // delete Product
    deleteProduct(id: any) {
        return this.http.delete('http://localhost:3000/list' + "/" + id);

    }

    // Edit/Update  Task List 
  updataProduct(id: any, item: any) {

    return this.http.patch(`http://localhost:3000/list/${id}`, item);
  }


  dropdowvalue(){
    
    return this.http.get('http://localhost:3000/cities');


  }
}

