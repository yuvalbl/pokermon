import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokermonDetailComponent } from './pokermon-detail.component';

describe('PokermonDetailComponent', () => {
  let component: PokermonDetailComponent;
  let fixture: ComponentFixture<PokermonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokermonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokermonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
