import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {ButtupdaterService} from './buttupdater.service';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCommonModule} from '@angular/material/core';
import {ReactiveFormsModule} from '@angular/forms';
import {QRCodeModule} from 'angularx-qrcode';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { SvgComponent } from './svg/svg.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    SvgComponent,
  ],
  imports: [
    BrowserModule,
    MatCommonModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    QRCodeModule,
  MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [
    ButtupdaterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
