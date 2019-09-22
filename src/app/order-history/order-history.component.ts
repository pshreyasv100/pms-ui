import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { SalesServiceService } from '../shared/sales-service.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {


 contact : string
 suggestionsArray: String[] = [];

  constructor(private data: DataService,
    private salesService: SalesServiceService) { }

  ngOnInit() {
    this.data.currentContact.subscribe(contact => this.contact = contact);
    this.salesService.getUserHistory(this.contact).subscribe((data: any) => {
      this.suggestionsArray = data["products"];
    });
    
  }

}
