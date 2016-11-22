"use strict";
/* tslint:disable:no-unused-variable */
var testing_1 = require('@angular/core/testing');
var rapui_usr_msg_test_component_1 = require('./ng2-balloon-msg-test.component.ts');
describe('Ng2BalloonMsgTestComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [rapui_usr_msg_test_component_1.Ng2BalloonMsgTestComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(rapui_usr_msg_test_component_1.Ng2BalloonMsgTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
