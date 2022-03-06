import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmotpComponent } from './confirmotp.component';

describe('ConfirmotpComponent', () => {
  let component: ConfirmotpComponent;
  let fixture: ComponentFixture<ConfirmotpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmotpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
