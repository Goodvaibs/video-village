import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreLikeThisComponent } from './more-like-this.component';

describe('MoreLikeThisComponent', () => {
  let component: MoreLikeThisComponent;
  let fixture: ComponentFixture<MoreLikeThisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreLikeThisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreLikeThisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
