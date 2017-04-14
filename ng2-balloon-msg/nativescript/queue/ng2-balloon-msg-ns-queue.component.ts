import {Component} from "@angular/core";
import {Ng2BalloonMsgCommonQueueComponent} from "../../common/ng2-balloon-msg-common-queue.component";
import {Ng2BalloonMsgService} from "../../services/ng2-balloon-msg.service";


@Component({
    selector: 'ng2-balloon-msg-ns',
    templateUrl: './ng2-balloon-msg-ns-queue.component.html',
    styleUrls: ['./ng2-balloon-msg-ns-queue.component.css'],
    moduleId: module.id
})
export class Ng2BalloonMsgNsQueueComponent extends Ng2BalloonMsgCommonQueueComponent {

    constructor(msgService: Ng2BalloonMsgService) {
        super(msgService);
    }
}
