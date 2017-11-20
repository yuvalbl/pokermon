import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PokermonService } from '../pokermon-service.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-pokermon-list',
  template: `
    <h2>Poker Nights</h2>
    <ul class="items">
      <li *ngFor="let pokermon of pokermons$ | async"
          [class.selected]="pokermon.id === selectedId">
        <a [routerLink]="['/pokermon', pokermon.id]">
          <span class="badge">{{ pokermon.name }}</span>
        </a>
      </li>
    </ul>
  `,
  styles: [``]
})
export class PokermonListComponent implements OnInit {
  pokermons$: Observable<any[]>;

  private selectedId: number;

  constructor(
    private service: PokermonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.pokermons$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        console.log(params)
        // console.log('adas', +params.get('id'))

        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getPokermons();
      });
  }

}
