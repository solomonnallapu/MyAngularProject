import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTypesComponent } from './book-types.component';

describe('BookTypesComponent', () => {
  let component: BookTypesComponent;
  let fixture: ComponentFixture<BookTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
