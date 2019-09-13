import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewStudentPage } from './add-new-student.page';

describe('AddNewStudentPage', () => {
  let component: AddNewStudentPage;
  let fixture: ComponentFixture<AddNewStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewStudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
