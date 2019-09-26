import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private nameSource = new BehaviorSubject('');
  currentName = this.nameSource.asObservable();

  private contactSource = new BehaviorSubject('');
  currentContact = this.contactSource.asObservable();


  constructor() { }

  changeName(name: string) {
    this.nameSource.next(name);
  }

  changeContact(contact: string){
    this.contactSource.next(contact);
  }



}
