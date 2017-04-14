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
var _1 = require("../../../../");
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
        this.msgService.showError("This is a test error. Click to dismiss");
    };
    Ng2BalloonMsgTestComponent.prototype.showSuccessConfirm = function () {
        var p = this.msgService.showMessage("This is a success confirm.", _1.UsrMsgLevel.Success, _1.UsrMsgType.Confirm, {
            confirmText: "OK Confirm"
        });
    };
    Ng2BalloonMsgTestComponent.prototype.showErrorConfirmCancel = function () {
        var p = this.msgService.showMessage("This is a Error Confirm Cancel.", _1.UsrMsgLevel.Error, _1.UsrMsgType.ConfirmCancel, {
            confirmText: "OK Confirm",
            cancelText: "Cancel xx",
            dialogTitle: "Awesome title"
        });
        p.catch(function (err) {
            console.log("Ignoring reject call from promise for this test.");
        });
    };
    return Ng2BalloonMsgTestComponent;
}());
Ng2BalloonMsgTestComponent = __decorate([
    core_1.Component({
        selector: 'ng2-balloon-msg-test',
        templateUrl: 'ng2-balloon-msg-test.component.html',
    }),
    __metadata("design:paramtypes", [_1.Ng2BalloonMsgService])
], Ng2BalloonMsgTestComponent);
exports.Ng2BalloonMsgTestComponent = Ng2BalloonMsgTestComponent;
//# sourceMappingURL=ng2-balloon-msg-test.component.js.map