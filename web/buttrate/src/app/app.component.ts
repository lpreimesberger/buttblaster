import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttIndex = 0;
  cRating = 3.00;
  wasRated = false;
  current = 3;
  max = 10;
  butts = [
    {
      added: '2021-04-12T23:40:21.055588',
      bio: 'Honorable Janie',
      name: 'Honorable Janie',
      _id: '07a6d725-5e04-43ac-928c-f2cc554033d4'
    }
  ];
  title = 'buttrate';

  constructor(public httpClient: HttpClient) {
    console.log('starting...');
    this.buttLoader();
  }

  computeCRating(): void {
    const now: object = this.butts[this.buttIndex];
    if ( 'ratings' in now ) {
      console.log('has ratings');
      const count = now['ratings'].length;
      let sum = 0;
      now['ratings'].forEach( (value) => {
        console.log(value);
        sum = sum + 1 * value['value'];
        console.log(sum);
        console.log(count);
        this.cRating = (sum / count);
      });
    } else {
      this.cRating = 3.00;
    }
  }

  buttLoader(): void {
    this.httpClient.get('/butts').toPromise().then((data) => {
      this.butts = data['data'];
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  }

  advance(): void {
    if (this.buttIndex >= this.butts.length) {
      return;
    }
    if ( this.wasRated ){
      console.log('Sending review...');
      // ratebutt/<bid>/<value>'
      this.httpClient.put('/ratebutt/' + this.butts[this.buttIndex]['_id'] + '/' + this.current, {} ).toPromise().then(
        (result) => {
          console.log(result);
        }
      );
    }
    this.wasRated = false;
    this.buttIndex = this.buttIndex + 1;
    this.computeCRating();
  }

  back(): void {
    if (this.buttIndex <= 0) {
      return;
    }

    this.wasRated = false;
    this.buttIndex = this.buttIndex - 1;
    this.computeCRating();
  }

  getSelectedRating(rating: any): void {
    console.log(rating);
  }

  rated(): void {
    this.wasRated = true;
    console.log('rated!');
  }
}
