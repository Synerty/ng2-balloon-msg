/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ng2BalloonMsgItemComponent } from './ng2-balloon-msg-item.component';

describe('Ng2BalloonMsgItemComponent', () => {
  let component: Ng2BalloonMsgItemComponent;
  let fixture: ComponentFixture<Ng2BalloonMsgItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2BalloonMsgItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2BalloonMsgItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
