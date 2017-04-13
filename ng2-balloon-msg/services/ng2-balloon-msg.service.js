var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
export var UsrMsgLevel;
(function (UsrMsgLevel) {
    UsrMsgLevel[UsrMsgLevel["Error"] = 1] = "Error";
    UsrMsgLevel[UsrMsgLevel["Warning"] = 2] = "Warning";
    UsrMsgLevel[UsrMsgLevel["Info"] = 4] = "Info";
    UsrMsgLevel[UsrMsgLevel["Success"] = 8] = "Success";
})(UsrMsgLevel || (UsrMsgLevel = {}));
export var UsrMsgType;
(function (UsrMsgType) {
    UsrMsgType[UsrMsgType["Fleeting"] = 1] = "Fleeting";
    UsrMsgType[UsrMsgType["Sticky"] = 2] = "Sticky";
    UsrMsgType[UsrMsgType["Confirm"] = 4] = "Confirm";
    UsrMsgType[UsrMsgType["ConfirmCancel"] = 8] = "ConfirmCancel";
})(UsrMsgType || (UsrMsgType = {}));
var UsrMsgDetails = (function () {
    function UsrMsgDetails(msg, level, type, confirmText, cancelText) {
        if (confirmText === void 0) { confirmText = null; }
        if (cancelText === void 0) { cancelText = null; }
        var _this = this;
        this.msg = msg;
        this.level = level;
        this.type = type;
        this.confirmText = confirmText;
        this.cancelText = cancelText;
        this.expired = false;
        this.promise = null;
        this.rejector = null;
        this.resolver = null;
        // Level
        this.isSuccess = function () { return _this.level === UsrMsgLevel.Success; };
        this.isInfo = function () { return _this.level === UsrMsgLevel.Info; };
        this.isWarning = function () { return _this.level === UsrMsgLevel.Warning; };
        this.isError = function () { return _this.level === UsrMsgLevel.Error; };
        // Type
        this.isFleeting = function () { return _this.type === UsrMsgType.Fleeting; };
        this.isSticky = function () { return _this.type === UsrMsgType.Sticky; };
        this.isConfirm = function () { return _this.type === UsrMsgType.Confirm; };
        this.isConfirmCancel = function () { return _this.type === UsrMsgType.ConfirmCancel; };
        this.promise = new Promise(function (resolver, rejector) {
            _this.resolver = resolver;
            _this.rejector = rejector;
        });
    }
    UsrMsgDetails.prototype.resolve = function () {
        if (this.resolver != null)
            this.resolver();
    };
    UsrMsgDetails.prototype.reject = function () {
        if (this.rejector != null)
            this.rejector();
    };
    return UsrMsgDetails;
}());
export { UsrMsgDetails };
var Ng2BalloonMsgService = (function () {
    function Ng2BalloonMsgService() {
        var _this = this;
        this.observable = Observable.create(function (observer) { return _this.observer = observer; });
        // Call subscribe, otherwise the observer is never created
        this.observable.subscribe();
    }
    Ng2BalloonMsgService.prototype.getObservable = function () {
        return this.observable;
    };
    Ng2BalloonMsgService.prototype.showError = function (msg) {
        this.observer.next(new UsrMsgDetails(msg, UsrMsgLevel.Error, UsrMsgType.Sticky));
    };
    Ng2BalloonMsgService.prototype.showWarning = function (msg) {
        this.observer.next(new UsrMsgDetails(msg, UsrMsgLevel.Warning, UsrMsgType.Fleeting));
    };
    Ng2BalloonMsgService.prototype.showInfo = function (msg) {
        this.observer.next(new UsrMsgDetails(msg, UsrMsgLevel.Info, UsrMsgType.Fleeting));
    };
    Ng2BalloonMsgService.prototype.showSuccess = function (msg) {
        this.observer.next(new UsrMsgDetails(msg, UsrMsgLevel.Success, UsrMsgType.Fleeting));
    };
    Ng2BalloonMsgService.prototype.showMessage = function (msg, level, type, confirmText, cancelText) {
        if (confirmText === void 0) { confirmText = "Confirm"; }
        if (cancelText === void 0) { cancelText = "Cancel"; }
        var msgObj = new UsrMsgDetails(msg, level, type, confirmText, cancelText);
        this.observer.next(msgObj);
        return msgObj.promise;
    };
    return Ng2BalloonMsgService;
}());
Ng2BalloonMsgService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], Ng2BalloonMsgService);
export { Ng2BalloonMsgService };
//# sourceMappingURL=/home/peek/project/ng2-balloon-msg/ng2-balloon-msg/services/ng2-balloon-msg.service.js.map