import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGetParamComponent } from './api-get-param.component';

describe('ApiGetParamComponent', () => {
  let component: ApiGetParamComponent;
  let fixture: ComponentFixture<ApiGetParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiGetParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiGetParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
