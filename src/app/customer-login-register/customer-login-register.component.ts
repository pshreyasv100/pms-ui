import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PmsSuggestorService } from '../shared/services/pms-suggestor.service';
import { Router } from '@angular/router';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-customer-login-register',
  templateUrl: './customer-login-register.component.html',
  styleUrls: ['./customer-login-register.component.css']
})
export class CustomerLoginRegisterComponent implements OnInit {


  customer: any = {
    phone: '',
    name: ''
  }

  authenticUser: boolean = true;


  @ViewChild('customerForm', { static: false }) customerForm: NgForm;


  constructor(private pmsService: PmsSuggestorService,
    private router: Router,
     private data: DataService) { }

  ngOnInit() {
  }


  submit() {
    this.pmsService.verifyDetails(this.customer).subscribe((res: any) => {
      if (res["content"] == "existing") {
        this.data.changeName(this.customer.name);
        this.data.changeContact(this.customer.phone);
        this.router.navigate(['/welcome']);
      }   
      else{
        this.authenticUser = false;
      }
    });

  }

}
