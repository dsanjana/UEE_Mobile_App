import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEmployeePage } from './add-new-employee.page';

describe('AddNewEmployeePage', () => {
  let component: AddNewEmployeePage;
  let fixture: ComponentFixture<AddNewEmployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewEmployeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
