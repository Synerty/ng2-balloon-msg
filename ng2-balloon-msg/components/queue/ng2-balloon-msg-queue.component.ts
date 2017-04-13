import {Component, OnInit} from "@angular/core";
import {
    Ng2BalloonMsgService,
    UsrMsgDetails
} from "../../services/ng2-balloon-msg.service";

@Component({
    selector: 'ng2-balloon-msg',
    templateUrl: 'ng2-balloon-msg-queue.component.html',
    styleUrls: ['ng2-balloon-msg-queue.component.css']
})
export class Ng2BalloonMsgQueueComponent implements OnInit {

    // Max Queue Length, the number of messages to show in the screen
    private readonly maxQueueLength = 3;

    backlog: UsrMsgDetails[] = [];
    private _onScreen: UsrMsgDetails[] = [];

    constructor(private msgService: Ng2BalloonMsgService) {

    }

    ngOnInit(): void {
        this.msgService.getObservable()
            .subscribe(msgDetails => this.backlog.push(msgDetails));
    }

    getShown(): UsrMsgDetails[] {
        // First, remove all the shown messages that arn't shown
        this.backlog = this.backlog.filter(msgDetails => !msgDetails.expired);

        // We can't just re-create the array otherwise angular2-dev complains that the
        // object has changed after a check

        // Remove the items from the array
        for (let i = this._onScreen.length - 1; i >= 0; i--) {
            if (this._onScreen[i].expired)
                this._onScreen.splice(i, 1);
        }

        // Now add three back
        while (this._onScreen.length < this.maxQueueLength && this.backlog.length) {
            this._onScreen.push(this.backlog.shift())
        }

        return this._onScreen;
    }


}
