import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ButtupdaterService} from './buttupdater.service';
import * as faker from 'faker';
import * as lodash from 'lodash';
import {stringify, v4 as uuidv4} from 'uuid';
// @ts-ignore
import * as adjectives from '../assets/adjectives.json';
import * as verbs from '../assets/verbs.json';
import * as fun from '../assets/fun.json';
import * as action from '../assets/action.json';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar, SimpleSnackBar} from '@angular/material/snack-bar';
import {WebcamImage, WebcamInitError} from 'ngx-webcam';
import {AllButts} from './all-butts';
import {OneButt} from './one-butt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'buttweb';
//  buttsnap = 'http://192.168.86.20:5000/buttsnap';
  name: string;
  bio: string;
  uuid: string;
  keypressed = 12;
  theButt = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA' +
  'AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO' +
  '9TXL0Y4OHwAAAABJRU5ErkJggg==';
  private hasCamera: boolean;
///
  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public deviceId = '';
  public snapMode = false;
  public confirmMode = false;
  public disclaimer = true;
  public rankMode = false;
  public width = 1000;
  public height = 1000;
  imageObject: Array<object> = [  ];


  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();



  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    this.keypressed = event.keyCode;
    console.log(this.keypressed);
    if (this.keypressed === 82) {
      this.cycle();
    }
    if (this.keypressed === 83) {
      this.red();
    }
  }

  makeName(x: string): string {
    return x.charAt(0).toUpperCase() + x.slice(1);
  }
  // tslint:disable-next-line:typedef
  cycle() {
    this.name = lodash.sample(adjectives.data) + ' ' + faker.name.firstName();
    this.bio = lodash.sample(action.data) + ' ' + lodash.sample(verbs.data) + ' ' + lodash.sample(fun.data);
    this.bio = this.bio.toLowerCase();
    this.uuid = uuidv4();
    this.snackBar.open('New user data', 'more', { duration: 2000});
  }
  constructor(public bu: ButtupdaterService, public cd: ChangeDetectorRef, public client: HttpClient, public snackBar: MatSnackBar) {
    // surpress error
    this.name = '';
    this.bio = '';
    // @ts-ignore
    this.webcamImage = null;
    this.hasCamera = false;
    this.uuid = uuidv4();
    this.cycle();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  // handle phone flips
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    console.log('handling resizing');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }



  ngOnInit(): void {
      this.load();
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

  load(): void {
    console.log('loading butts');
    this.client.get(this.bu.host + '/butts').toPromise().then((raw: any) => {
      const cats: AllButts = raw;
      // clean the butts
      this.imageObject = [];
      // @ts-ignore
      for (const x in cats.data) {
        const record: OneButt = cats.data[x];
        if (record.butt.length < 5) {
          continue;
        }
        this.imageObject.push({
          image: record.butt,
          thumbImage: record.butt,
          likes: record.likes,
          _id: record._id,
          name: record.name,
          title: record.name + ' ' + record.likes + ' ♥',
          alt: 'Image alt',
        });
      }
    }).catch((theError) => {
      this.snackBar.open('An error occurred', 'more', { duration: 2000});
    }).finally( () => {
    });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public handleImage(webcamImage: WebcamImage): void {
    // tslint:disable-next-line:no-console
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    const x = webcamImage.imageAsDataUrl;
    this.theButt = x;
    this.confirmMode = true;
    this.rankMode = this.snapMode = false;
    new Audio('/assets/click.mp3').play();

  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }

  sendButt(): void {
    const data = { name: this.name, bio: this.bio, uuid: this.uuid, butt: this.theButt};
    this.client.post(this.bu.host + '/sendbutt/' + this.uuid, data).toPromise().then( (cats) => {
      console.log(cats);
      this.snackBar.open('Butt snapped', 'more', { duration: 2000});
    }).catch((theError) => {
      this.snackBar.open('An error occurred', 'more', { duration: 2000});
    }).finally( () => {
      this.snapMode = this.confirmMode = false;
      this.rankMode = true;
      this.load();
    });
  }

  pokeButt(index: number): void {
    console.log(index);
    const butt: object = this.imageObject[index];
    console.log(butt);
    // @ts-ignore
    this.client.put(this.bu.host + '/ratebutt/' + butt._id + '/5').toPromise().then((raw: any) => {
        // @ts-ignore
      this.imageObject[index].likes += 1;
      // @ts-ignore
      this.imageObject[index].title = this.imageObject[index].name + ' ' + this.imageObject[index].likes + ' ♥';
    });
  }

  agree(): void {
    this.disclaimer = false;
    this.snapMode = true;
  }
}


