import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'flight-search',
      component: SearchComponent
    }])
  ],
  declarations: [
    SearchComponent
  ],
})
export class FlightSearchModule { }
