import { Component, OnInit } from '@angular/core';
import { SalesServiceService } from '../shared/services/sales-service.service';
import { CustomerDetails } from '../shared/model/customerDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-dept-page',
  templateUrl: './sales-dept-page.component.html',
  styleUrls: ['./sales-dept-page.component.css']
})
export class SalesDeptPageComponent implements OnInit {

  contact: String = '';


  allCustomers: CustomerDetails[] = [];
  interestedCustomers: CustomerDetails[] = [];
  suggestionsArray: String[] = [];

  showCustomersTable: boolean = false;
  showInterestedCustomers: boolean =  false;
  showCustomersInterestsTable: boolean = false;

  fromDate: string;
  toDate: string;



  constructor(private salesService: SalesServiceService,private router: Router) { }

  ngOnInit() {
  }

  getCustomerRecommendations() {
    this.showCustomersInterestsTable = true;
    this.salesService.getUserHistory(this.contact).subscribe((data: any) => {
      this.suggestionsArray = data["products"];
      console.log(data);
    });
  }


  getCustomers(){
    this.showCustomersTable = true;
    this.salesService.getAllCustomers().subscribe((data: any) => {
      this.allCustomers = data;
    });
  }

  getInterestedCustomers(){
    
    this.salesService.getInterestedCustomersWithinDateRange(this.fromDate, this.toDate).subscribe((data:any) => {
        this.interestedCustomers = data;
        this.showInterestedCustomers  = true;
    });
  }


  closeAllCustomersTable(){
    this.showCustomersTable = false;
  }


  closeInterestedCustomersTable(){
    this.showInterestedCustomers = false;
  }


  closeCustomersInterestsTable(){
    this.showCustomersInterestsTable = false;
  }



  
  goBack(){
    this.router.navigate(['']);
  }

}
