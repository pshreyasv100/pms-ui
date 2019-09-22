import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDeptPageComponent } from './sales-dept-page.component';

describe('SalesDeptPageComponent', () => {
  let component: SalesDeptPageComponent;
  let fixture: ComponentFixture<SalesDeptPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesDeptPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesDeptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
