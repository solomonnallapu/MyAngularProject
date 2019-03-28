import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmsComponent } from './firms.component';

describe('FirmsComponent', () => {
  let component: FirmsComponent;
  let fixture: ComponentFixture<FirmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
