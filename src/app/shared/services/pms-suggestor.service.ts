import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CustomerDetails } from '../model/customerDetails';
import { Recommendation } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class PmsSuggestorService {

  private chatURL: string = "http://localhost:8080/chat";
  private nextQuestionURL: string = "http://localhost:8080/question";
  private suggestionURL: string = "http://localhost:8080/suggest";
  private registerUserURL: string = "http://localhost:8080/register";
  private verifyUserURL: string = "http://localhost:8080/verify/user";

  private saveSuggestionsURL: string = "http://localhost:8080/save";


  constructor(private http: HttpClient) { }

  verifyDetails(data: any): any {
    let params = new HttpParams().set("name", data.name).set("contact", data.phone);
    return (this.http.get(this.verifyUserURL, { params: params }));
  }


  startChat(data: any): any {
    let params = new HttpParams().set("location",data.location).set("beds", data.beds);
    return this.http.get(this.chatURL, { params: params });
  }


  getNextQuestion(previousAnswers: string): any {

    let params = new HttpParams().set("answer", previousAnswers);
    if (previousAnswers == '') {
      return this.http.get(this.nextQuestionURL);
    }
    return this.http.get(this.nextQuestionURL, { params: params });
  }

  getSuggestion(): any {
    return this.http.get(this.suggestionURL);
  }


  saveSuggestions(recommendations: Recommendation): any {
    debugger
    return this.http.post(this.saveSuggestionsURL, recommendations);
  }



  registerUser(customer: CustomerDetails): any {
    return this.http.post(this.registerUserURL, customer);
  }

}
