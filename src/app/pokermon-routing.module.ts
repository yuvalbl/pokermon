import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokermonListComponent } from './pokermon-list/pokermon-list.component';
import { PokermonDetailComponent } from './pokermon-detail/pokermon-detail.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pokermons', component:  PokermonListComponent },
  { path: 'pokermon/:id', component:  PokermonDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PokermonRoutingModule { }
