"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Ng2BalloonMsgComponent = (function () {
    function Ng2BalloonMsgComponent(msgService) {
        this.msgService = msgService;
        // Max Queue Length, the number of messages to show in the screen
        this.maxQueueLength = 3;
        this.backlog = [];
        this._onScreen = [];
    }
    Ng2BalloonMsgComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msgService.getObservable()
            .subscribe(function (msgDetails) { return _this.backlog.push(msgDetails); });
    };
    Ng2BalloonMsgComponent.prototype.getShown = function () {
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
    Ng2BalloonMsgComponent = __decorate([
        core_1.Component({
            selector: 'ng2-balloon-msg',
            templateUrl: 'ng2-balloon-msg.component.html',
            styleUrls: ['ng2-balloon-msg.component.css']
        })
    ], Ng2BalloonMsgComponent);
    return Ng2BalloonMsgComponent;
}());
exports.Ng2BalloonMsgComponent = Ng2BalloonMsgComponent;
