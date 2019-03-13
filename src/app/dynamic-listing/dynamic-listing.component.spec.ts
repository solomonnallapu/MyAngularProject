import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicListingComponent } from './dynamic-listing.component';

describe('DynamicListingComponent', () => {
  let component: DynamicListingComponent;
  let fixture: ComponentFixture<DynamicListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
