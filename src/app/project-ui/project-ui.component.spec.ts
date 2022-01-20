import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUiComponent } from './project-ui.component';

describe('ProjectUiComponent', () => {
  let component: ProjectUiComponent;
  let fixture: ComponentFixture<ProjectUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
