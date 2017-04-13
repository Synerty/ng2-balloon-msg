import {
    AfterViewInit,
    animate,
    Component,
    Input,
    OnInit,
    state,
    style,
    transition,
    trigger
} from "@angular/core";
import {UsrMsgDetails} from "../../services/ng2-balloon-msg.service";


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
export class Ng2BalloonMsgItemComponent implements OnInit, AfterViewInit {

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
        if (this.msgDetails.isFleeting()) {
            setTimeout(() => this.shown = false, this.showDuration);
            setTimeout(() => this.msgDetails.expired = true, this.expireDuration);
        }

    }

    ngAfterViewInit() {
        $('#ng2BalloonMsg' + this.msgDetails.msgId)["modal"]('show');
    }

    msgClicked(): void {
        this.msgDetails.expired = true;
    }

    confirmClicked(): void {
        this.msgDetails.resolve();
        this.msgDetails.expired = true;
        this.shown = false;
    }

    cancelClicked(): void {
        this.msgDetails.reject();
        this.msgDetails.expired = true;
        this.shown = false;
    }

}
