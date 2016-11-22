import {
    Component,
    Input,
    trigger,
    transition,
    state,
    animate,
    style,
    OnInit
} from "@angular/core";
import {UsrMsgDetails, UsrMsgLevel} from "../../services/service/ng2-balloon-msg.service";

@Component({
    selector: 'ng2-balloon-msg-item',
    templateUrl: 'ng2-balloon-msg-item.component.html',
    animations: [
        trigger('visibilityChanged', [
            state("shown", style({opacity: 1})),
            state("hidden", style({opacity: 0})),
            transition('* => *', animate('500ms'))
        ])
    ],
})
export class Ng2BalloonMsgItemComponent implements OnInit {

    @Input()
    msgDetails: UsrMsgDetails;

    shown: boolean = true;

    // in ms, The time it takes before it fades out
    private readonly showDuration = 2000;

    // in ms, The time to wait before expiring the message
    private readonly expireDuration = 3000; // showDuration + fade in/out time


    constructor() {

    }

    ngOnInit() {
        // Hide the message after a certain period.
        if (this.msgDetails.type !== UsrMsgLevel.Error) {
            setTimeout(() => this.shown = false, this.showDuration);
            setTimeout(() => this.msgDetails.expired = true, this.expireDuration);
        }

    }

    clicked(): void {
        this.msgDetails.expired = true;
    }

}
