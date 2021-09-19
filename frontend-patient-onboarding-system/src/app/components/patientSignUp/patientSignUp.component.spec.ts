import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSignUpComponent } from './patientSignUp.component';

describe('LoginComponent', () => {
  let component: PatientSignUpComponent;
  let fixture: ComponentFixture<PatientSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
