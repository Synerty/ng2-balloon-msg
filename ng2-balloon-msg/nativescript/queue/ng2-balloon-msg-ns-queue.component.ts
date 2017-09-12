import {Component, Output, EventEmitter} from "@angular/core";
import {Ng2BalloonMsgCommonQueueComponent} from "../../common/ng2-balloon-msg-common-queue.component";
import {Ng2BalloonMsgService} from "../../services/ng2-balloon-msg.service";


@Component({
    selector: 'ng2-balloon-msg-ns',
    templateUrl: './ng2-balloon-msg-ns-queue.component.html',
    moduleId: module.id
})
export class Ng2BalloonMsgNsQueueComponent extends Ng2BalloonMsgCommonQueueComponent {

    @Output("rowSpanChangedEvent")
    rowSpanChangedEvent = new EventEmitter<number>();

    constructor(msgService: Ng2BalloonMsgService) {
        super(msgService);

        this.showModalEvent.subscribe(
            () => this.rowSpanChangedEvent.emit(this.rowSpan())
        )
    }

    rowSpan() :number {
        return this.isShowingModal() ? 2 : 1;
    }


}
