import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationToUserComponent } from './information-to-user.component';

describe('InformationToUserComponent', () => {
  let component: InformationToUserComponent;
  let fixture: ComponentFixture<InformationToUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationToUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
