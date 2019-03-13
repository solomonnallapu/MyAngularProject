import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicClassesComponent } from './dynamic-classes.component';

describe('DynamicClassesComponent', () => {
  let component: DynamicClassesComponent;
  let fixture: ComponentFixture<DynamicClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
