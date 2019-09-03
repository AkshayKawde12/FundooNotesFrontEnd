import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordModelComponent } from './password-model.component';

describe('PasswordModelComponent', () => {
  let component: PasswordModelComponent;
  let fixture: ComponentFixture<PasswordModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
