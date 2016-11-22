/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ng2BalloonMsgQueueComponent } from './ng2-balloon-msg-queue.component';

describe('Ng2BalloonMsgQueueComponent', () => {
  let component: Ng2BalloonMsgQueueComponent;
  let fixture: ComponentFixture<Ng2BalloonMsgQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2BalloonMsgQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2BalloonMsgQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
