"use strict";
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var rapui_usr_msg_service_1 = require("./ng2-balloon-msg.service.ts");
describe('Ng2BalloonMsgService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [rapui_usr_msg_service_1.Ng2BalloonMsgService]
        });
    });
    it('should ...', testing_1.inject([rapui_usr_msg_service_1.Ng2BalloonMsgService], function (service) {
        expect(service).toBeTruthy();
    }));
});
