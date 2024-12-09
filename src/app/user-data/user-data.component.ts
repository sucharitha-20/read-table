import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  data:any;
  constructor(private productService:ProductsServiceService){

  }
  ngOnInit(): void {
    this.productService.getdata().subscribe(users=>{
      //this.data=users;
    })
  }

}
