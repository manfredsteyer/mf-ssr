import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FlightSearchModule } from './flight-search/flight-search.module';
import { HomeComponent } from './home/home.component';
import { RendererModule, TransferHttpCacheModule } from '@nguniversal/common/clover';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'appId' }),
    FlightSearchModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'}
    ]),
    RendererModule.forRoot(),
    TransferHttpCacheModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
