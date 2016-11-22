/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ng2BalloonMsgTestComponent } from './ng2-balloon-msg-test.component';

describe('Ng2BalloonMsgTestComponent', () => {
  let component: Ng2BalloonMsgTestComponent;
  let fixture: ComponentFixture<Ng2BalloonMsgTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2BalloonMsgTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2BalloonMsgTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
