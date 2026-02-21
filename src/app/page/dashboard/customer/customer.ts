import { NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerModel } from '../../../../model/types';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-customer',
  imports: [RouterOutlet, NgForOf, FormsModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer implements OnInit {

  customerList: Array<CustomerModel> = [];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.http.get<CustomerModel[]>("http://localhost:8080/customer/getallcustomers").subscribe((response) => {
      console.log(response);
      this.customerList = response;
      this.cdr.detectChanges();
    });
  }


  customerObj: CustomerModel = {
    id: '',
    title: '',
    name: '',
    dob: {},
    salary: 0,
    address: '',
    city: '',
    province: '',
    postalCode: ''
  }

  addCustomer(): void {
    console.log(this.customerObj);

    this.http.post("http://localhost:8080/customer/addCustomer", this.customerObj).subscribe(res => {
      console.log(res);
      if (res === true) {
        Swal.fire({
          title: "Good job!",
          text: "Customer added successfully!",
          icon: "success"
        });
      }
      this.getAll();
  })
  }

  UpdateCustomer():void{
    console.log("Update Loaded!!!!");
    
    this.http.put("http://localhost:8080/customer/updatecustomer",this.customerObj).subscribe(res=>{
      console.log(res);
      this.getAll();
    })
  }

  deleteCustomer(id: string): void{
    this.http.delete("http://localhost:8080/customer/deletecustomer/"+id).subscribe(res=>{
      console.log(res);
      this.getAll();
    })
  }
}
