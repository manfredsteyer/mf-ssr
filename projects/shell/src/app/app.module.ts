import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RendererModule, TransferHttpCacheModule } from '@nguniversal/common/clover';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'appId' }),
    RendererModule.forRoot(),
    TransferHttpCacheModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full' 
      },
      {
        path: 'flights',
        loadChildren: () => loadRemoteModule({
          // remoteEntry: 'http://localhost:3000/remoteEntry.js',
          remoteName: 'mfe1',
          exposedModule: './Module'
        }).then(m => m.FlightSearchModule)
      }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
