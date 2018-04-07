"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Ng2BalloonMsgCommonQueueComponent = /** @class */ (function () {
    function Ng2BalloonMsgCommonQueueComponent(msgService) {
        this.msgService = msgService;
        this.lastShowingModal = null;
        this.lastShowingPopup = null;
        this.showModalEvent = new core_1.EventEmitter();
        this.showPopupEvent = new core_1.EventEmitter();
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
        if (this.lastShowingModal !== this.isShowingModal()) {
            this.lastShowingModal = this.isShowingModal();
            this.showModalEvent.emit(this.lastShowingModal);
        }
        if (this.lastShowingPopup !== this.isShowingPopup()) {
            this.lastShowingPopup = this.isShowingPopup();
            this.showPopupEvent.emit(this.lastShowingPopup);
        }
        return this._onScreen;
    };
    Ng2BalloonMsgCommonQueueComponent.prototype.isShowingModal = function () {
        return this._onScreen.length != 0 && this._onScreen[0].isModal();
    };
    Ng2BalloonMsgCommonQueueComponent.prototype.isShowingPopup = function () {
        return this._onScreen.length != 0 && !this._onScreen[0].isModal();
    };
    __decorate([
        core_1.Output("showModalEvent"),
        __metadata("design:type", Object)
    ], Ng2BalloonMsgCommonQueueComponent.prototype, "showModalEvent", void 0);
    __decorate([
        core_1.Output("showPopupEvent"),
        __metadata("design:type", Object)
    ], Ng2BalloonMsgCommonQueueComponent.prototype, "showPopupEvent", void 0);
    return Ng2BalloonMsgCommonQueueComponent;
}());
exports.Ng2BalloonMsgCommonQueueComponent = Ng2BalloonMsgCommonQueueComponent;
//# sourceMappingURL=ng2-balloon-msg-common-queue.component.js.map