import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitchildComponent } from './remitchild.component';

describe('RemitchildComponent', () => {
  let component: RemitchildComponent;
  let fixture: ComponentFixture<RemitchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
