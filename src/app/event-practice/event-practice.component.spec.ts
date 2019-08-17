import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPracticeComponent } from './event-practice.component';

describe('EventPracticeComponent', () => {
  let component: EventPracticeComponent;
  let fixture: ComponentFixture<EventPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
