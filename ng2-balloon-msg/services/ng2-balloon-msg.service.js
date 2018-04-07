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
var Subject_1 = require("rxjs/Subject");
var UsrMsgLevel;
(function (UsrMsgLevel) {
    UsrMsgLevel[UsrMsgLevel["Error"] = 1] = "Error";
    UsrMsgLevel[UsrMsgLevel["Warning"] = 2] = "Warning";
    UsrMsgLevel[UsrMsgLevel["Info"] = 4] = "Info";
    UsrMsgLevel[UsrMsgLevel["Success"] = 8] = "Success";
})(UsrMsgLevel = exports.UsrMsgLevel || (exports.UsrMsgLevel = {}));
var UsrMsgType;
(function (UsrMsgType) {
    UsrMsgType[UsrMsgType["Fleeting"] = 1] = "Fleeting";
    UsrMsgType[UsrMsgType["Sticky"] = 2] = "Sticky";
    UsrMsgType[UsrMsgType["Confirm"] = 4] = "Confirm";
    UsrMsgType[UsrMsgType["ConfirmCancel"] = 8] = "ConfirmCancel";
})(UsrMsgType = exports.UsrMsgType || (exports.UsrMsgType = {}));
var UsrMsgDetails = /** @class */ (function () {
    function UsrMsgDetails(msg, level, type, confirmText, cancelText, dialogTitle, routePath) {
        if (confirmText === void 0) { confirmText = null; }
        if (cancelText === void 0) { cancelText = null; }
        if (dialogTitle === void 0) { dialogTitle = null; }
        if (routePath === void 0) { routePath = null; }
        var _this = this;
        this.msg = msg;
        this.level = level;
        this.type = type;
        this.confirmText = confirmText;
        this.cancelText = cancelText;
        this.dialogTitle = dialogTitle;
        this.routePath = routePath;
        this.expired = false;
        this.promise = null;
        this.rejector = null;
        this.resolver = null;
        this.msgId = UsrMsgDetails.nextMsgId++;
        if (this.confirmText == null)
            this.confirmText = "Confirm";
        if (this.cancelText == null)
            this.cancelText = "Cancel";
        this.promise = new Promise(function (resolver, rejector) {
            _this.resolver = resolver;
            _this.rejector = rejector;
        });
    }
    // Level
    UsrMsgDetails.prototype.isSuccess = function () {
        return this.level === UsrMsgLevel.Success;
    };
    ;
    UsrMsgDetails.prototype.isInfo = function () {
        return this.level === UsrMsgLevel.Info;
    };
    UsrMsgDetails.prototype.isWarning = function () {
        return this.level === UsrMsgLevel.Warning;
    };
    UsrMsgDetails.prototype.isError = function () {
        return this.level === UsrMsgLevel.Error;
    };
    // Type
    UsrMsgDetails.prototype.isFleeting = function () {
        return this.type === UsrMsgType.Fleeting;
    };
    UsrMsgDetails.prototype.isSticky = function () {
        return this.type === UsrMsgType.Sticky;
    };
    UsrMsgDetails.prototype.isConfirm = function () {
        return this.type === UsrMsgType.Confirm;
    };
    UsrMsgDetails.prototype.isConfirmCancel = function () {
        return this.type === UsrMsgType.ConfirmCancel;
    };
    // Other
    UsrMsgDetails.prototype.isModal = function () {
        return this.isConfirm() || this.isConfirmCancel();
    };
    UsrMsgDetails.prototype.hasRoute = function () {
        return this.routePath != null;
    };
    UsrMsgDetails.prototype.resolve = function () {
        if (this.resolver != null)
            this.resolver();
    };
    UsrMsgDetails.prototype.reject = function () {
        if (this.rejector != null)
            this.rejector();
    };
    UsrMsgDetails.nextMsgId = 1;
    return UsrMsgDetails;
}());
exports.UsrMsgDetails = UsrMsgDetails;
var Ng2BalloonMsgService = /** @class */ (function () {
    function Ng2BalloonMsgService() {
        this.observable = new Subject_1.Subject();
    }
    Ng2BalloonMsgService.prototype.getObservable = function () {
        return this.observable;
    };
    Ng2BalloonMsgService.prototype.showError = function (msg, routePath) {
        this.observable.next(new UsrMsgDetails(msg, UsrMsgLevel.Error, UsrMsgType.Sticky, null, null, null, routePath));
    };
    Ng2BalloonMsgService.prototype.showWarning = function (msg, routePath) {
        this.observable.next(new UsrMsgDetails(msg, UsrMsgLevel.Warning, UsrMsgType.Fleeting, null, null, null, routePath));
    };
    Ng2BalloonMsgService.prototype.showInfo = function (msg, routePath) {
        this.observable.next(new UsrMsgDetails(msg, UsrMsgLevel.Info, UsrMsgType.Fleeting, null, null, null, routePath));
    };
    Ng2BalloonMsgService.prototype.showSuccess = function (msg, routePath) {
        this.observable.next(new UsrMsgDetails(msg, UsrMsgLevel.Success, UsrMsgType.Fleeting, null, null, null, routePath));
    };
    Ng2BalloonMsgService.prototype.showMessage = function (msg, level, type, parameters) {
        if (parameters === void 0) { parameters = {}; }
        var confirmText = parameters.confirmText, cancelText = parameters.cancelText, dialogTitle = parameters.dialogTitle, routePath = parameters.routePath;
        var msgObj = new UsrMsgDetails(msg, level, type, confirmText, cancelText, dialogTitle, routePath);
        this.observable.next(msgObj);
        return msgObj.promise;
    };
    Ng2BalloonMsgService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], Ng2BalloonMsgService);
    return Ng2BalloonMsgService;
}());
exports.Ng2BalloonMsgService = Ng2BalloonMsgService;
//# sourceMappingURL=ng2-balloon-msg.service.js.map