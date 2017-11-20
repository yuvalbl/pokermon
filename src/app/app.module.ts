import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokermonListComponent } from './pokermon-list/pokermon-list.component';
import { PokermonDetailComponent } from './pokermon-detail/pokermon-detail.component';
import { PokermonRoutingModule } from './pokermon-routing.module';
import { HomeComponent } from './home/home.component';
import { PokermonService } from './pokermon-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent ,
    PokermonListComponent,
    PokermonDetailComponent
  ],
  imports: [
    BrowserModule,
    PokermonRoutingModule
  ],
  providers: [PokermonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
