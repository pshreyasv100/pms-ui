import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PmsSuggestorService } from '../shared/services/pms-suggestor.service';
import { CustomerDetails } from '../shared/model/customerDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer: CustomerDetails = {
    name: '',
    email: '',
    contact: '',
    location: ''
  };

  formSubmitted: boolean = false;
  response: any = '';

  @ViewChild('userDetailsForm', { static: false }) userDetailsForm: NgForm;

  constructor(private pmsService: PmsSuggestorService,private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.pmsService.registerUser(this.customer).subscribe(() => {
      this.router.navigate(['customer']);
    });
  }

}
