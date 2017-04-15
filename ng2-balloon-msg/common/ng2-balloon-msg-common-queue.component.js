"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ng2BalloonMsgCommonQueueComponent = (function () {
    function Ng2BalloonMsgCommonQueueComponent(msgService) {
        this.msgService = msgService;
        // Max Queue Length, the number of messages to show in the screen
        this.maxQueueLength = 3;
        this.backlog = [];
        this._onScreen = [];
    }
    Ng2BalloonMsgCommonQueueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msgService.getObservable()
            .subscribe(function (msgDetails) { return _this.backlog.push(msgDetails); });
    };
    Ng2BalloonMsgCommonQueueComponent.prototype.getShown = function () {
        // First, remove all the shown messages that arn't shown
        this.backlog = this.backlog.filter(function (msgDetails) { return !msgDetails.expired; });
        // We can't just re-create the array otherwise angular2-dev complains that the
        // object has changed after a check
        // Remove the items from the array
        for (var i = this._onScreen.length - 1; i >= 0; i--) {
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
            this._onScreen.push(this.backlog.shift());
        }
        return this._onScreen;
    };
    return Ng2BalloonMsgCommonQueueComponent;
}());
exports.Ng2BalloonMsgCommonQueueComponent = Ng2BalloonMsgCommonQueueComponent;
//# sourceMappingURL=ng2-balloon-msg-common-queue.component.js.map