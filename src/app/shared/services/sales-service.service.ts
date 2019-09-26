import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesServiceService {

  private getCustomerHistoryURL: string = "http://localhost:8080/user/recommendation";
  private getCustomersURL : string = "http://localhost:8080/all/users";
  private getInterestedCustomers: string = "http://localhost:8080/interested/customer/daterange"


  constructor(private http: HttpClient) { }

  getUserHistory(contact: any) : any{
    let params = new HttpParams().set("contact",  contact);
    return  this.http.get(this.getCustomerHistoryURL,{params: params});
  }


  getAllCustomers(): any{
    return this.http.get(this.getCustomersURL);
  }

  getInterestedCustomersWithinDateRange(fromDate: string, toDate: string): any {
   
   let params = new HttpParams().set("fromDate",fromDate).set("toDate",toDate);
    return this.http.get(this.getInterestedCustomers,{params:params});
  }


}
