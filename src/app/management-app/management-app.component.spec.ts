import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementAppComponent } from './management-app.component';

describe('ManagementAppComponent', () => {
  let component: ManagementAppComponent;
  let fixture: ComponentFixture<ManagementAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementAppComponent]
    });
    fixture = TestBed.createComponent(ManagementAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
