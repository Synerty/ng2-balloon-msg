import {OnInit, EventEmitter, Output} from "@angular/core";
import {Ng2BalloonMsgService, UsrMsgDetails} from "../services/ng2-balloon-msg.service";


export class Ng2BalloonMsgCommonQueueComponent implements OnInit {

    private lastShowingModal: boolean | null = null;
    private lastShowingPopup: boolean | null = null;

    @Output("showModalEvent")
    showModalEvent = new EventEmitter<boolean>();

    @Output("showPopupEvent")
    showPopupEvent = new EventEmitter<boolean>();

    // Max Queue Length, the number of messages to show in the screen
    protected readonly maxQueueLength = 3;

    backlog: UsrMsgDetails[] = [];
    protected _onScreen: UsrMsgDetails[] = [];

    constructor(protected msgService: Ng2BalloonMsgService) {

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
            // If we have one message, and it's a modal message, then break.
            // We only show one modal message at a time
            if (this._onScreen.length == 1 && this._onScreen[0].isModal())
                break;

            // If we already have messages
            // they won't be modal (because of the above check)
            // So if the next one is modal, then don't add it. We need to clear out
            // the other messages first.
            if (this._onScreen.length != 0 && this.backlog[0].isModal())
                break;

            this._onScreen.push(this.backlog.shift())
        }

        if (this.lastShowingModal !== this.isShowingModal()) {
          this.lastShowingModal = this.isShowingModal();
          this.showModalEvent.emit(this.lastShowingModal);
        }

        if (this.lastShowingPopup !== this.isShowingPopup()) {
          this.lastShowingPopup = this.isShowingPopup();
          this.showPopupEvent.emit(this.lastShowingPopup);
        }

        return this._onScreen;
    }

    isShowingModal() :boolean {
        return this._onScreen.length != 0 && this._onScreen[0].isModal();
    }

    isShowingPopup() :boolean {
        return this._onScreen.length != 0 && !this._onScreen[0].isModal();
    }


}
