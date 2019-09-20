import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PmsSuggestorService } from '../shared/pms-suggestor.service';
import { CustomerDetails } from '../shared/customerDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer: CustomerDetails = {
    centralPMSRequired: '',
    email: '',
    phone: '',
    shippingAddress: ''
  };

  formSubmitted: boolean = false;
  response: any = '';

  @ViewChild('userDetailsForm', { static: false }) userDetailsForm: NgForm;

  constructor(private pmsService: PmsSuggestorService,private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.pmsService.registerUser(this.customer).subscribe((data : any) => {
      this.response = data["content"];
      this.router.navigate(['']);
    });
  }

}
