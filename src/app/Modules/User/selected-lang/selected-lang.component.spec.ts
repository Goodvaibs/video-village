import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedLangComponent } from './selected-lang.component';

describe('SelectedLangComponent', () => {
  let component: SelectedLangComponent;
  let fixture: ComponentFixture<SelectedLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
