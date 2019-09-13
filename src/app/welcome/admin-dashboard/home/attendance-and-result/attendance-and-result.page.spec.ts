import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceAndResultPage } from './attendance-and-result.page';

describe('AttendanceAndResultPage', () => {
  let component: AttendanceAndResultPage;
  let fixture: ComponentFixture<AttendanceAndResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceAndResultPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceAndResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
