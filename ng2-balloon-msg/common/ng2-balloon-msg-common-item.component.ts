import {Input, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UsrMsgDetails} from "../services/ng2-balloon-msg.service";


export class Ng2BalloonMsgCommonItemComponent implements OnInit {

    @Input()
    msgDetails: UsrMsgDetails;

    shown: boolean = true;
    shownStr: string = "shown";

    // in ms, The time it takes for change of animation state
    protected readonly animationDuration = 500;

    // in ms, The time it takes before it fades out
    protected readonly showDuration = 2000;

    // in ms, The time to wait before expiring the message
    protected readonly expireDuration = 3000; // showDuration + fade in/out time

    // in ms, Additional time to show the message for if it has a route
    protected readonly withRouteDuration = 2000;


    constructor(protected router: Router) {

    }

    ngOnInit() {
        let expireDuration = this.msgDetails.hasRoute()
            ? this.expireDuration + this.withRouteDuration
            : this.expireDuration;

        let showDuration = this.msgDetails.hasRoute()
            ? this.showDuration + this.withRouteDuration
            : this.showDuration;

        // Hide the message after a certain period.
        if (this.msgDetails.isFleeting()) {
            setTimeout(() => {
                this.shown = false;
                this.shownStr = "hidden";
            }, showDuration);

            setTimeout(() => {
                this.msgDetails.expired = true;
            }, expireDuration);
        }

    }

    msgClicked(): void {
        this.msgDetails.expired = true;
    }

    openClicked(): void {
        this.msgDetails.expired = true;
        this.router.navigate([this.msgDetails.routePath]);
    }

    confirmClicked(): void {
        this.shownStr = "hidden";
        // Add 100ms to allow animations to complete
        setTimeout(() => {
            this.msgDetails.resolve();
            this.msgDetails.expired = true;
            this.shown = false;

            // Route when they click ok
            if (this.msgDetails.hasRoute())
                this.router.navigate([this.msgDetails.routePath]);

        }, this.animationDuration + 100);
    }

    cancelClicked(): void {
        this.shownStr = "hidden";
        setTimeout(() => {
            this.msgDetails.reject();
            this.msgDetails.expired = true;
            this.shown = false;
        }, this.animationDuration + 100);
    }

}
