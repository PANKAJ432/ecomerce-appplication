import { Component } from '@angular/core';
import { TableApisService } from './core/service/table-apis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstPrimeApp';

    constructor(public productService:TableApisService) {}

    ngOnInit() {
      
     
    }
}
