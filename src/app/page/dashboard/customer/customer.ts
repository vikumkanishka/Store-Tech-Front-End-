import { NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-customer',
  imports: [RouterOutlet, NgForOf],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer implements OnInit {

  customerList:any = null;

  constructor(private http: HttpClient,private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.http.get("http://localhost:8080/customer/getallcustomers").subscribe((response) => {
      console.log(response);
      this.customerList = response;
      this.cdr.detectChanges();
    });
  }
}
