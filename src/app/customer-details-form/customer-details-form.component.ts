import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PmsSuggestorService } from '../shared/pms-suggestor.service';
import { Acquity } from '../shared/acquity';

@Component({
  selector: 'app-customer-details-form',
  templateUrl: './customer-details-form.component.html',
  styleUrls: ['./customer-details-form.component.css']
})
export class CustomerDetailsFormComponent implements OnInit {

  customer: Acquity =
    {
      customerName: '',
      location: '',
      beds: 0
    };

  chatHistory: any[]=[];

  previousAnswers: string[] = [];
  answer: string = '';

  response: string = '';
  responseArray: string[] = [];
  suggestionsArray: String[] = [];

  foundSuggestion: boolean = false;
  chatStarted: boolean = false;

  errorMessage: string;

  @ViewChild('customerForm', { static: false }) customerForm: NgForm;

  constructor(private pmsService: PmsSuggestorService) { }

  ngOnInit() {
  }

  getCustomer() {
    this.pmsService.determineAcquity(this.customer);
  }

  submit() {
    this.pmsService.determineAcquity(this.customer).subscribe((data: any) => {
      this.response = data["content"];
    });
  }

  startChat(){
    this.chatStarted = true;
    this.getNextQuestion();
  }

  getNextQuestion() {
    
    let currentAnswer;
    
    if(this.answer != ''){
      this.previousAnswers.push(this.answer);
      currentAnswer = this.answer;
    }
   
    this.answer = '';
    this.pmsService.getNextQuestion(this.previousAnswers.join(',')).subscribe((data: any) => {

      this.responseArray = data["content"].split('\n');
      this.chatHistory.push([this.responseArray, currentAnswer]);

      this.foundSuggestion = true;
      // console.log(data["content"]);
      // console.log(this.chatHistory);

      // if (data["content"] == "I have arrived at a suggestion for you") {
      //   this.foundSuggestion = true;
      // }
    });
  }


  goBack(){
    this.previousAnswers.pop();
    this.chatHistory.pop();
  }


  fetchSuggestion() {

    this.pmsService.getSuggestion().subscribe((data: any) => { 
      console.log(data["content"]);
      this.suggestionsArray = data["content"].split('\n');
    });
  }






}
