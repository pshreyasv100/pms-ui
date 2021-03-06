import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PmsSuggestorService } from '../shared/services/pms-suggestor.service';
import { Recommendation } from '../shared/model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  customer: any =
    {
      beds: '',
      location: ''
    };

  chatHistory: any[] = [];

  previousAnswers: string[] = [];
  answer: string = '';

  response: string = '';
  responseArray: string[] = [];
  recommendations: Recommendation = {
    products: []
  };
  recommendationsArray: string[] = [];
  recommendationsPics: string[];

  showRecommendations: boolean = false;
  chatStarted: boolean = false;
  chatEnded: boolean = false;
  hidePreviousButton: boolean = true;
  hideRecommendationButton: boolean = true;


  @ViewChild('customerForm', { static: false }) customerForm: NgForm;


  constructor(private pmsService: PmsSuggestorService,
    private router: Router) { }

  ngOnInit() {
  }


  submit() {
    this.pmsService.startChat(this.customer).subscribe((data: any) => {
      this.response = data["content"];
    });
  }

  startChat() {
    this.getNextQuestion();
  }


  getNextQuestion() {

    let currentAnswer;
    if (this.answer != '') {
      this.previousAnswers.push(this.answer);
      currentAnswer = this.answer;
    }

    this.hidePreviousButton = (this.chatHistory.length > 0) ? false : true;
    this.hideRecommendationButton = (this.chatHistory.length > 0) ? false : true;;

    this.answer = '';
    this.pmsService.getNextQuestion(this.previousAnswers.join(',')).subscribe((data: any) => {

      this.responseArray = data["content"].split('\n');
      this.chatHistory.push([this.responseArray, currentAnswer]);

      if (data["content"] == "I have arrived at a suggestion for you") {
        this.chatEnded = true;
      }

      this.chatStarted = true;
    });
  }


  goBack() {

    this.hideRecommendationButton = (this.chatHistory.length > 1) ? false : true;
    this.hidePreviousButton = (this.chatHistory.length > 1) ? false : true;
    if (this.chatEnded) {
      this.chatEnded = false;
    }
    this.previousAnswers.pop();
    this.chatHistory.pop();
  }


  fetchSuggestion() {
    this.pmsService.getSuggestion().subscribe((data: any) => {
    
      this.recommendationsArray = data["content"].split('\n');   
      this.recommendationsPics = Object.assign([], this.recommendationsArray);
      this.recommendationsPics.pop();
      this.recommendationsPics.splice(0, 1);
      this.showRecommendations = true;
    });
  }


  saveSuggestions() {
    let products = Object.assign([], this.recommendationsArray);
    products.pop();
    products.splice(0, 1);
    this.recommendations.products = products;
    this.pmsService.saveSuggestions(this.recommendations).subscribe((data: any) => {
      console.log(data);
      alert("suggestions have been saved");
    });
    this.router.navigate(['']);
    
  }


  exitChat(){
    this.router.navigate(['welcome']);
  }



}


