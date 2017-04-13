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
    UsrMsgLevel[UsrMsgLevel["Info"] = 3] = "Info";
    UsrMsgLevel[UsrMsgLevel["Success"] = 4] = "Success";
})(UsrMsgLevel || (UsrMsgLevel = {}));
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
    return Ng2BalloonMsgService;
}());
Ng2BalloonMsgService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], Ng2BalloonMsgService);
export { Ng2BalloonMsgService };
//# sourceMappingURL=/home/peek/project/ng2-balloon-msg/ng2-balloon-msg/services/ng2-balloon-msg.service.js.map