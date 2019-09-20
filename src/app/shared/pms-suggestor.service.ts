import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Acquity } from './acquity';
import { $ } from 'protractor';
import { CustomerDetails } from './customerDetails';

@Injectable({
  providedIn: 'root'
})
export class PmsSuggestorService {


  private acquityDetailsURL: string = "http://localhost:8080/getdetails";
  private nextQuestionURL: string = "http://localhost:8080/ask";
  private suggestionURL: string = "http://localhost:8080/suggest";
  private registerUserURL: string = "http://localhost:8080/getfurtherdetails";


  constructor(private http: HttpClient) { }

  determineAcquity(data: any): any {
    let params = new HttpParams().set("name", data.customerName).set("location", data.location).set("beds", data.beds);
    return this.http.get(this.acquityDetailsURL, { params: params });
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


  registerUser(userDetails: CustomerDetails): any {

    let params = new HttpParams().set("centralPMS", userDetails.centralPMSRequired)
    .set("email", userDetails.email).set("phone", userDetails.phone).set("shippingaddress",userDetails.shippingAddress);
    return this.http.get(this.registerUserURL, { params: params });
  }

}
