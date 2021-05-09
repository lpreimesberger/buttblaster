import {ChangeDetectorRef, Component, HostListener} from '@angular/core';
import {Observable} from 'rxjs';
import {ButtupdaterService} from './buttupdater.service';
import * as faker from 'faker';
import * as lodash from 'lodash';
import { v4 as uuidv4 } from 'uuid';
// @ts-ignore
import * as adjectives from '../assets/adjectives.json';
import * as verbs from '../assets/verbs.json';
import * as fun from '../assets/fun.json';
import * as action from '../assets/action.json';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar, SimpleSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'buttweb';
  buttsnap = 'http://192.168.86.174:5000/buttsnap';
  name: string;
  bio: string;
  uuid: string;
  keypressed = 12;

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    this.keypressed = event.keyCode;
    console.log(this.keypressed);
    if( this.keypressed === 82 ){ this.cycle(); }
    if( this.keypressed === 83 ){ this.red(); }
  }

  makeName(x: string): string {
    return x.charAt(0).toUpperCase() + x.slice(1);
  }
  // tslint:disable-next-line:typedef
  cycle() {
    this.name = lodash.sample(adjectives.data) + ' ' + faker.name.firstName();
    this.bio = lodash.sample(action.data) + ' ' + lodash.sample(verbs.data) + ' ' + lodash.sample(fun.data);
    this.uuid = uuidv4();
    this.snackBar.open('New user data', 'more', { duration: 2000});
  }
  constructor(public bu: ButtupdaterService, public cd: ChangeDetectorRef, public client: HttpClient, public snackBar: MatSnackBar) {
    // surpress error
    this.name = '';
    this.bio = '';
    this.uuid = uuidv4();
    this.cycle();
    this.bu.buttSnap$.subscribe(newButt => {
      console.log(newButt);
      this.buttsnap = newButt;
    });
  }

  red(): void {
    const thisSnap = document.getElementById('butt');
    console.log(thisSnap);
    new Audio('/assets/click.mp3').play();
    const data = { name: this.name, bio: this.bio, uuid: this.uuid};
    this.client.post(this.bu.host + '/addbutt/' + this.uuid, data).toPromise().then( (cats) => {
      console.log(cats);
      this.snackBar.open('Butt snapped', 'more', { duration: 2000});
    }).catch((theError) => {
      this.snackBar.open('An error occurred', 'more', { duration: 2000});
    }).finally( () => {
      this.cycle();
    });
  }

}


