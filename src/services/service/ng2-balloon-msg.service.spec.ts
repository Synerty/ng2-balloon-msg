/* tslint:disable:no-unused-variable */
import {TestBed, inject} from "@angular/core/testing";
import {Ng2BalloonMsgService} from "./ng2-balloon-msg.service";

describe('Ng2BalloonMsgService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [Ng2BalloonMsgService]
        });
    });

    it('should ...', inject([Ng2BalloonMsgService], (service: Ng2BalloonMsgService) => {
        expect(service).toBeTruthy();
    }));
});
