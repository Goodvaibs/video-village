import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInGetStartedComponent } from './sign-in-get-started.component';

describe('SignInGetStartedComponent', () => {
  let component: SignInGetStartedComponent;
  let fixture: ComponentFixture<SignInGetStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInGetStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
