import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {tick} from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ButtupdaterService {
  private message = new Subject<string>();
  public buttSnap$ = this.message.asObservable();
  private barebutt = 'http://192.168.86.174:5000/buttsnap';
  private butt = 'http://192.168.86.174:5000/buttsnap';
  constructor() {
    setInterval(this.butter.bind(this), 5000);
  }

  // tslint:disable-next-line:typedef
  butter(){
    console.log('click');
    this.butt = this.barebutt + '?cache=' + Math.random();
    this.message.next(this.butt);
  }

}
