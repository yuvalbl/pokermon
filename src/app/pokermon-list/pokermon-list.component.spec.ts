import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokermonListComponent } from './pokermon-list.component';

describe('PokermonListComponent', () => {
  let component: PokermonListComponent;
  let fixture: ComponentFixture<PokermonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokermonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokermonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
