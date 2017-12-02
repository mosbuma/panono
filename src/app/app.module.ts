import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {ClarityModule} from 'clarity-angular';
import {HttpClientModule} from '@angular/common/http';
import { ExploreComponent } from './explore/explore.component';
import { PreloaderComponent } from './layout/preloader/preloader.component';
import { ThumbsComponent } from './explore/thumbs/thumbs.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ExploreComponent,
    PreloaderComponent,
    ThumbsComponent
  ],
  imports: [
    ClarityModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
