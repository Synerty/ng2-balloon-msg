import {Component} from "@angular/core";
import {Ng2BalloonMsgService} from "../../../";

@Component({
    selector: 'ng2-balloon-msg-test',
    templateUrl: 'ng2-balloon-msg-test.component.html',
})
export class Ng2BalloonMsgTestComponent {

    constructor(private msgService: Ng2BalloonMsgService) {
    }

    showSuccess() {
        this.msgService.showSuccess("This is a test SUCCESS");
    }

    showInfo() {
        this.msgService.showInfo("This is a test info");
    }

    showWarning() {
        this.msgService.showWarning("This is a test warning");
    }

    showError() {
        this.msgService.showError("This is a test error. Click to dismiss");
    }
}
