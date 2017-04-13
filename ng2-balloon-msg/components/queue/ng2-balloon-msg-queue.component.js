var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { Ng2BalloonMsgService } from "../../services/ng2-balloon-msg.service";
var Ng2BalloonMsgQueueComponent = (function () {
    function Ng2BalloonMsgQueueComponent(msgService) {
        this.msgService = msgService;
        // Max Queue Length, the number of messages to show in the screen
        this.maxQueueLength = 3;
        this.backlog = [];
        this._onScreen = [];
    }
    Ng2BalloonMsgQueueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msgService.getObservable()
            .subscribe(function (msgDetails) { return _this.backlog.push(msgDetails); });
    };
    Ng2BalloonMsgQueueComponent.prototype.getShown = function () {
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
            this._onScreen.push(this.backlog.shift());
        }
        return this._onScreen;
    };
    return Ng2BalloonMsgQueueComponent;
}());
Ng2BalloonMsgQueueComponent = __decorate([
    Component({
        selector: 'ng2-balloon-msg',
        templateUrl: 'ng2-balloon-msg-queue.component.html',
        styleUrls: ['ng2-balloon-msg-queue.component.css']
    }),
    __metadata("design:paramtypes", [Ng2BalloonMsgService])
], Ng2BalloonMsgQueueComponent);
export { Ng2BalloonMsgQueueComponent };
//# sourceMappingURL=/home/peek/project/ng2-balloon-msg/ng2-balloon-msg/components/queue/ng2-balloon-msg-queue.component.js.map