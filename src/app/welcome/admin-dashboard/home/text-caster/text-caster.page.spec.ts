import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCasterPage } from './text-caster.page';

describe('TextCasterPage', () => {
  let component: TextCasterPage;
  let fixture: ComponentFixture<TextCasterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextCasterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
