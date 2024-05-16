import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TableApisService } from 'src/app/core/service/table-apis.service';
import { AddDataComponent } from '../add-data/add-data.component';
import { FormGroup, FormControl } from '@angular/forms';
import { City } from 'src/app/core/interfaces/auth';

interface PageEvent {
  first: any;
  rows: any;
  page: any;
  pageCount: any;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [DialogService, MessageService, ConfirmationService]
})
export class TableComponent {

  first: any = 0;

  rows: any = 5;
  totalRecords = 20;
  ref: DynamicDialogRef | undefined;

  updateData: any
  cities: any

  selectedCity: any = ''
  dropdownForm!: FormGroup;

  multipleData: any = []
  product: any = []
  lastFirst: any = 0;
  productData: any[] = [];
  selectedCategory: string | null = null;
  regions:any[]=[
    {id:1, name:"Accessories"},
    {id:2, name:"cosmetic"},
    
  ]
  constructor(public productService: TableApisService, public dialogService: DialogService, public messageService: MessageService, private confirmationService: ConfirmationService,) { }

  ngOnInit() {
    this.tableList()
    this.dropdownForm = new FormGroup({
      selectedCity: new FormControl<City | null>(null)
    });

  }

  filter(event: any) {

    const searchValue = event.target.value.toLowerCase().trim();
    this.productData = this.product.filter((row: any) => {
      // Filtering logic goes here
      return (
        row.name.toLowerCase().includes(searchValue) || row.category.toLowerCase().includes(searchValue) || row.code.toLowerCase().includes(searchValue)
      );
    });
  }

  onPage(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  tableList() {
    this.productService.getProductsData().subscribe((res: any) => {
      this.product = res;
      this.productData = [...this.product];
    });
  }

//    filteredProducts() {
//     return this.selectedCategory
//         ? this.product.filter((product: any) => product.category === this.selectedCategory)
//         : this.product;
// }


  show(key: any, selectedProdut: any,) {
    this.ref = this.dialogService.open(AddDataComponent, {
      header: 'Select a Product',
      width: '30%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      data: selectedProdut

    });

    this.ref.onClose.subscribe((data: any) => {
      if (key === 'addProduct') {

        if (data) {
          const Adddata = {
            code: data.code,
            name: data.name,
            category: data.category,
            quantity: data.quantity,
          }
          this.productService.postSProductData(data).subscribe((res: any) => {
            this.tableList()
          })
        }
      }
      else if (key === 'editProduct') {

        if (data) {
          console.log(data)
          this.updateData = {
            code: data.code,
            name: data.name,
            category: data.category,
            quantity: data.quantity,
          }
        }
        this.productService.updataProduct(selectedProdut.id, this.updateData).subscribe((res: any) => {
          this.tableList();

        })
      }
    });

  }

  delete(id: any, event: any) {

    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to Delete?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Are You  accepted' });
        this.productService.deleteProduct(id).subscribe((res: any) => {
          this.tableList();

        })
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });

  }


  // editProduct(selectedProdut: any, id: any) {
  //   
  //   this.ref = this.dialogService.open(AddDataComponent, {
  //     header: 'Select a Product',
  //     width: '30%',
  //     contentStyle: { overflow: 'auto' },
  //     baseZIndex: 10000,
  //     data: selectedProdut
  //   });


  //   this.ref.onClose.subscribe((data: any) => {

  //     if (data) {
  //       console.log(data)
  //       this.updateData = {
  //         code: data.code,
  //         name: data.name,
  //         category: data.category,
  //         quantity: data.quantity,
  //       }
  //     }
  //     this.productService.updataProduct(selectedProdut.id, this.updateData).subscribe((res: any) => {
  //       this.tableList();

  //     })
  //   })


  //   // this.apiService.updataTask(taskTd, data).subscribe((res: any) => {
  //   //   this.getTaskLiast();
  //   //   this.toastrService.success('Update Task Success!', 'Title Success!');

  //   // })
  //   // }

  // }



  customSort(event: any) {

    event.data.sort((data1: any, data2: any) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return event.order * result;
    });
  }
}

