import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PokermonService } from '../pokermon-service.service';

@Component({
  selector: 'app-pokermon-detail',
  template: `
    <ng-container *ngIf="pokermon$ | async as pokermon">
      <h3>{{ pokermon.name }}</h3>
      <img [src]="'/assets/img/' + pokermon.id + '.jpg'"/>
    </ng-container>
  `,
  styles: [``]
})
export class PokermonDetailComponent implements OnInit {
  pokermon$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private service: PokermonService
  ) {
    this.pokermon$ = this.route.paramMap
      .switchMap( (params: ParamMap) => {
          return this.service.getPokermon(params.get('id'));
      });
  }

  ngOnInit() {
  }

}

