import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositComponent } from './reposit.component';

describe('RepositComponent', () => {
  let component: RepositComponent;
  let fixture: ComponentFixture<RepositComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepositComponent]
    });
    fixture = TestBed.createComponent(RepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
