"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Ng2BalloonMsgTestComponent = (function () {
    function Ng2BalloonMsgTestComponent(msgService) {
        this.msgService = msgService;
    }
    Ng2BalloonMsgTestComponent.prototype.showSuccess = function () {
        this.msgService.showSuccess("This is a test SUCCESS");
    };
    Ng2BalloonMsgTestComponent.prototype.showInfo = function () {
        this.msgService.showInfo("This is a test info");
    };
    Ng2BalloonMsgTestComponent.prototype.showWarning = function () {
        this.msgService.showWarning("This is a test warning");
    };
    Ng2BalloonMsgTestComponent.prototype.showError = function () {
        this.msgService.showError("This is a test error");
    };
    Ng2BalloonMsgTestComponent = __decorate([
        core_1.Component({
            selector: 'ng2-balloon-msg-test',
            templateUrl: 'ng2-balloon-msg-test.component.html',
            styleUrls: ['ng2-balloon-msg-test.component.css']
        })
    ], Ng2BalloonMsgTestComponent);
    return Ng2BalloonMsgTestComponent;
}());
exports.Ng2BalloonMsgTestComponent = Ng2BalloonMsgTestComponent;
