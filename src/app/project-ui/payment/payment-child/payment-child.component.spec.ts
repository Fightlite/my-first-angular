import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentChildComponent } from './payment-child.component';

describe('PaymentChildComponent', () => {
  let component: PaymentChildComponent;
  let fixture: ComponentFixture<PaymentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
