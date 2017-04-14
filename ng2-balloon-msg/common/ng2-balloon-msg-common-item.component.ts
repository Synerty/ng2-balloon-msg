import {Input, OnInit} from "@angular/core";
import {UsrMsgDetails} from "../services/ng2-balloon-msg.service";


export class Ng2BalloonMsgCommonItemComponent implements OnInit {

    @Input()
    msgDetails: UsrMsgDetails;

    shown: boolean = true;

    // in ms, The time it takes before it fades out
    protected readonly showDuration = 2000;

    // in ms, The time to wait before expiring the message
    protected readonly expireDuration = 3000; // showDuration + fade in/out time


    constructor() {

    }

    ngOnInit() {
        // Hide the message after a certain period.
        if (this.msgDetails.isFleeting()) {
            setTimeout(() => this.shown = false, this.showDuration);
            setTimeout(() => this.msgDetails.expired = true, this.expireDuration);
        }

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
