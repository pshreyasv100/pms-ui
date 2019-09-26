import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { SalesServiceService } from '../shared/services/sales-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {


 contact : string
 suggestionsArray: String[] = [];

  constructor(private data: DataService,
    private salesService: SalesServiceService,
    private router: Router) { }

  ngOnInit() {
    this.data.currentContact.subscribe(contact => this.contact = contact);
    this.salesService.getUserHistory(this.contact).subscribe((data: any) => {
   
      for(var product of data["products"]){
        this.suggestionsArray.push(product.toUpperCase());
      }
      console.log(this.suggestionsArray);
    });

  

    
  }

  goBack(){
    this.router.navigate(['welcome']);
  }
}
