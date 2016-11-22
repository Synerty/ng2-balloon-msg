"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
(function (UsrMsgLevel) {
    UsrMsgLevel[UsrMsgLevel["Error"] = 1] = "Error";
    UsrMsgLevel[UsrMsgLevel["Warning"] = 2] = "Warning";
    UsrMsgLevel[UsrMsgLevel["Info"] = 3] = "Info";
    UsrMsgLevel[UsrMsgLevel["Success"] = 4] = "Success";
})(exports.UsrMsgLevel || (exports.UsrMsgLevel = {}));
var UsrMsgLevel = exports.UsrMsgLevel;
var UsrMsgDetails = (function () {
    function UsrMsgDetails(msg, type) {
        var _this = this;
        this.msg = msg;
        this.type = type;
        this.expired = false;
        this.isSuccess = function () { return _this.type === UsrMsgLevel.Success; };
        this.isInfo = function () { return _this.type === UsrMsgLevel.Info; };
        this.isWarning = function () { return _this.type === UsrMsgLevel.Warning; };
        this.isError = function () { return _this.type === UsrMsgLevel.Error; };
    }
    return UsrMsgDetails;
}());
exports.UsrMsgDetails = UsrMsgDetails;
var Ng2BalloonMsgService = (function () {
    function Ng2BalloonMsgService() {
        var _this = this;
        this.observable = rxjs_1.Observable.create(function (observer) { return _this.observer = observer; });
        // Call subscribe, otherwise the observer is never created
        this.observable.subscribe();
    }
    Ng2BalloonMsgService.prototype.getObservable = function () {
        return this.observable;
    };
    Ng2BalloonMsgService.prototype.showError = function (msg) {
        this.observer.next(new UsrMsgDetails(msg, UsrMsgLevel.Error));
    };
    Ng2BalloonMsgService.prototype.showWarning = function (msg) {
        this.observer.next(new UsrMsgDetails(msg, UsrMsgLevel.Warning));
    };
    Ng2BalloonMsgService.prototype.showInfo = function (msg) {
        this.observer.next(new UsrMsgDetails(msg, UsrMsgLevel.Info));
    };
    Ng2BalloonMsgService.prototype.showSuccess = function (msg) {
        this.observer.next(new UsrMsgDetails(msg, UsrMsgLevel.Success));
    };
    Ng2BalloonMsgService = __decorate([
        core_1.Injectable()
    ], Ng2BalloonMsgService);
    return Ng2BalloonMsgService;
}());
exports.Ng2BalloonMsgService = Ng2BalloonMsgService;
