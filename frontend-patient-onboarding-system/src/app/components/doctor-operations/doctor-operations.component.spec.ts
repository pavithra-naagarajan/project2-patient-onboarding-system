import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorOperationsComponent } from './doctor-operations.component';

describe('DoctorOperationsComponent', () => {
  let component: DoctorOperationsComponent;
  let fixture: ComponentFixture<DoctorOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
