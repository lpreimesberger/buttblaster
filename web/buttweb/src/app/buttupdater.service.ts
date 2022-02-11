import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {tick} from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ButtupdaterService {
  private message = new Subject<string>();
  public buttSnap$ = this.message.asObservable();
//  public host = 'http://192.168.86.20:5000';
  public host = '/api';
  private barebutt = this.host + '/buttsnap';
  private butt = this.host + '/buttsnap';
  constructor() {
    setInterval(this.butter.bind(this), 50000);
  }

  // tslint:disable-next-line:typedef
  butter(){
//    this.butt = this.barebutt + '?cache=' + Math.random();
 //   this.message.next(this.butt);
  }


  buttsnap(): boolean {
    console.log('butt snap');

    return true;
}

}
