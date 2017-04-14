import {Component} from "@angular/core";
import {Ng2BalloonMsgCommonQueueComponent} from "../../common/ng2-balloon-msg-common-queue.component";
import {Ng2BalloonMsgService} from "../../services/ng2-balloon-msg.service";

@Component({
    selector: 'ng2-balloon-msg',
    templateUrl: './ng2-balloon-msg-web-queue.component.html',
    styleUrls: ['./ng2-balloon-msg-web-queue.component.css']
})
export class Ng2BalloonMsgQueueComponent extends Ng2BalloonMsgCommonQueueComponent {

    constructor(msgService: Ng2BalloonMsgService) {
        super(msgService);
    }

}
