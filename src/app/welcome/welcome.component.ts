import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  name : string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentName.subscribe(name => this.name = name)
  }

}
