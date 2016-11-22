"use strict";
/* tslint:disable:no-unused-variable */
var testing_1 = require('@angular/core/testing');
var rapui_usr_msg_item_component_1 = require('./ng2-balloon-msg-item.component.ts');
describe('Ng2BalloonMsgItemComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [rapui_usr_msg_item_component_1.Ng2BalloonMsgItemComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(rapui_usr_msg_item_component_1.Ng2BalloonMsgItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
