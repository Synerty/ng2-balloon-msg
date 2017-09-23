import {Component, Output, EventEmitter} from "@angular/core";
import {Ng2BalloonMsgCommonQueueComponent} from "../../common/ng2-balloon-msg-common-queue.component";
import {Ng2BalloonMsgService} from "../../services/ng2-balloon-msg.service";


@Component({
    selector: 'ng2-balloon-msg-ns',
    templateUrl: './ng2-balloon-msg-ns-queue.component.html',
    moduleId: module.id
})
export class Ng2BalloonMsgNsQueueComponent extends Ng2BalloonMsgCommonQueueComponent {

    @Output("fullScreenNeededEvent")
    fullScreenNeededEvent = new EventEmitter<boolean>();

    constructor(msgService: Ng2BalloonMsgService) {
        super(msgService);

        this.showModalEvent.subscribe(
            (val) => this.fullScreenNeededEvent.emit(val)
        )
    }


}
