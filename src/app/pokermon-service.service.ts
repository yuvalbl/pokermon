import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const POKERMONS = [
  {id: 11, name: 'The night When Pokerchu All-ined'},
  {id: 12, name: 'Pokerzard Bluff'},
  {id: 13, name: 'Pokertles Wins '}
];

@Injectable()
export class PokermonService {
  getPokermons() { return Observable.of(POKERMONS); }

  getPokermon(id: number | string) {
    return this.getPokermons()
    // (+) before `id` turns the string into a number
      .map(pokermon => pokermon.find(pm => pm.id === +id));
  }
}
