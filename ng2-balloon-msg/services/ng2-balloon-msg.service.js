"use strict";
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
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
var UsrMsgDetails = (function () {
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
    return UsrMsgDetails;
}());
UsrMsgDetails.nextMsgId = 1;
exports.UsrMsgDetails = UsrMsgDetails;
var Ng2BalloonMsgService = (function () {
    function Ng2BalloonMsgService() {
        this.observable = new rxjs_1.Subject();
        console.log("Creating Ng2BalloonMsgService.");
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
        var confirmText = parameters.confirmText, cancelText = parameters.cancelText, dialogTitle = parameters.dialogTitle, routePath = parameters.routePath;
        var msgObj = new UsrMsgDetails(msg, level, type, confirmText, cancelText, dialogTitle, routePath);
        this.observable.next(msgObj);
        return msgObj.promise;
    };
    return Ng2BalloonMsgService;
}());
Ng2BalloonMsgService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], Ng2BalloonMsgService);
exports.Ng2BalloonMsgService = Ng2BalloonMsgService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWJhbGxvb24tbXNnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzItYmFsbG9vbi1tc2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBQ3pDLDZCQUE2QjtBQUU3QixJQUFZLFdBS1g7QUFMRCxXQUFZLFdBQVc7SUFDbkIsK0NBQVMsQ0FBQTtJQUNULG1EQUFXLENBQUE7SUFDWCw2Q0FBUSxDQUFBO0lBQ1IsbURBQVcsQ0FBQTtBQUNmLENBQUMsRUFMVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUt0QjtBQUVELElBQVksVUFLWDtBQUxELFdBQVksVUFBVTtJQUNsQixtREFBWSxDQUFBO0lBQ1osK0NBQVUsQ0FBQTtJQUNWLGlEQUFXLENBQUE7SUFDWCw2REFBaUIsQ0FBQTtBQUNyQixDQUFDLEVBTFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFLckI7QUFHRDtJQVVJLHVCQUFtQixHQUFXLEVBQ1gsS0FBa0IsRUFDbEIsSUFBZ0IsRUFDaEIsV0FBaUMsRUFDakMsVUFBZ0MsRUFDaEMsV0FBaUMsRUFDakMsU0FBK0I7UUFIL0IsNEJBQUEsRUFBQSxrQkFBaUM7UUFDakMsMkJBQUEsRUFBQSxpQkFBZ0M7UUFDaEMsNEJBQUEsRUFBQSxrQkFBaUM7UUFDakMsMEJBQUEsRUFBQSxnQkFBK0I7UUFObEQsaUJBY0M7UUFka0IsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7UUFDakMsZUFBVSxHQUFWLFVBQVUsQ0FBc0I7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQXNCO1FBWmxELFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsWUFBTyxHQUF5QixJQUFJLENBQUM7UUFFN0IsYUFBUSxHQUFR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LENBQUM7SUFHTCwyQkFBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7QUE1Q1ksb0JBQW9CO0lBRGhDLGlCQUFVLEVBQUU7O0dBQ0Esb0JBQW9CLENBNENoQztBQTVDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBlbnVtIFVzck1zZ0xldmVsIHtcbiAgICBFcnJvciA9IDEsXG4gICAgV2FybmluZyA9IDIsXG4gICAgSW5mbyA9IDQsXG4gICAgU3VjY2VzcyA9IDhcbn1cblxuZXhwb3J0IGVudW0gVXNyTXNnVHlwZSB7XG4gICAgRmxlZXRpbmcgPSAxLFxuICAgIFN0aWNreSA9IDIsXG4gICAgQ29uZmlybSA9IDQsXG4gICAgQ29uZmlybUNhbmNlbCA9IDhcbn1cblxuXG5leHBvcnQgY2xhc3MgVXNyTXNnRGV0YWlscyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgbmV4dE1zZ0lkID0gMTtcblxuICAgIG1zZ0lkOiBudW1iZXI7XG4gICAgZXhwaXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb21pc2U6IFByb21pc2U8bnVsbD4gfCBudWxsID0gbnVsbDtcblxuICAgIHByaXZhdGUgcmVqZWN0b3I6IGFueSA9IG51bGw7XG4gICAgcHJpdmF0ZSByZXNvbHZlcjogYW55ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtc2c6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBwdWJsaWMgbGV2ZWw6IFVzck1zZ0xldmVsLFxuICAgICAgICAgICAgICAgIHB1YmxpYyB0eXBlOiBVc3JNc2dUeXBlLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBjb25maXJtVGV4dDogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4gICAgICAgICAgICAgICAgcHVibGljIGNhbmNlbFRleHQ6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBkaWFsb2dUaXRsZTogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4gICAgICAgICAgICAgICAgcHVibGljIHJvdXRlUGF0aDogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5tc2dJZCA9IFVzck1zZ0RldGFpbHMubmV4dE1zZ0lkKys7XG5cbiAgICAgICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2U8bnVsbD4oKHJlc29sdmVyLCByZWplY3RvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlciA9IHJlc29sdmVyO1xuICAgICAgICAgICAgdGhpcy5yZWplY3RvciA9IHJlamVjdG9yO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vIExldmVsXG4gICAgaXNTdWNjZXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZXZlbCA9PT0gVXNyTXNnTGV2ZWwuU3VjY2VzcztcbiAgICB9O1xuXG4gICAgaXNJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZXZlbCA9PT0gVXNyTXNnTGV2ZWwuSW5mbztcbiAgICB9XG5cbiAgICBpc1dhcm5pbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxldmVsID09PSBVc3JNc2dMZXZlbC5XYXJuaW5nO1xuICAgIH1cblxuICAgIGlzRXJyb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxldmVsID09PSBVc3JNc2dMZXZlbC5FcnJvcjtcbiAgICB9XG5cblxuICAgIC8vIFR5cGVcbiAgICBpc0ZsZWV0aW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBVc3JNc2dUeXBlLkZsZWV0aW5nO1xuICAgIH1cblxuICAgIGlzU3RpY2t5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBVc3JNc2dUeXBlLlN0aWNreTtcbiAgICB9XG5cbiAgICBpc0NvbmZpcm0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFVzck1zZ1R5cGUuQ29uZmlybTtcbiAgICB9XG5cbiAgICBpc0NvbmZpcm1DYW5jZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFVzck1zZ1R5cGUuQ29uZmlybUNhbmNlbDtcbiAgICB9XG5cblxuICAgIC8vIE90aGVyXG4gICAgaXNNb2RhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb25maXJtKCkgfHwgdGhpcy5pc0NvbmZpcm1DYW5jZWwoKTtcbiAgICB9XG5cbiAgICBoYXNSb3V0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVQYXRoICE9IG51bGw7XG4gICAgfVxuXG5cbiAgICByZXNvbHZlKCkge1xuICAgICAgICBpZiAodGhpcy5yZXNvbHZlciAhPSBudWxsKVxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlcigpO1xuXG4gICAgfVxuXG4gICAgcmVqZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5yZWplY3RvciAhPSBudWxsKVxuICAgICAgICAgICAgdGhpcy5yZWplY3RvcigpO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzck1zZ1BhcmFtcyB7XG4gICAgY29uZmlybVRleHQ/OiBzdHJpbmcgfCBudWxsLFxuICAgIGNhbmNlbFRleHQ/OiBzdHJpbmcgfCBudWxsLFxuICAgIGRpYWxvZ1RpdGxlPzogc3RyaW5nIHwgbnVsbCxcbiAgICByb3V0ZVBhdGg/OiBzdHJpbmcgfCBudWxsXG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZzJCYWxsb29uTXNnU2VydmljZSB7XG4gICAgcHJpdmF0ZSBvYnNlcnZhYmxlOiBTdWJqZWN0PFVzck1zZ0RldGFpbHM+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZSA9IG5ldyBTdWJqZWN0PFVzck1zZ0RldGFpbHM+KCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJDcmVhdGluZyBOZzJCYWxsb29uTXNnU2VydmljZS5cIilcbiAgICB9XG5cbiAgICBnZXRPYnNlcnZhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZhYmxlO1xuICAgIH1cblxuICAgIHNob3dFcnJvcihtc2c6IHN0cmluZywgcm91dGVQYXRoPzogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9ic2VydmFibGUubmV4dChuZXcgVXNyTXNnRGV0YWlscyhcbiAgICAgICAgICAgIG1zZywgVXNyTXNnTGV2ZWwuRXJyb3IsIFVzck1zZ1R5cGUuU3RpY2t5LCBudWxsLCBudWxsLCBudWxsLCByb3V0ZVBhdGgpKTtcbiAgICB9XG5cbiAgICBzaG93V2FybmluZyhtc2c6IHN0cmluZywgcm91dGVQYXRoPzogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9ic2VydmFibGUubmV4dChuZXcgVXNyTXNnRGV0YWlscyhcbiAgICAgICAgICAgIG1zZywgVXNyTXNnTGV2ZWwuV2FybmluZywgVXNyTXNnVHlwZS5GbGVldGluZywgbnVsbCwgbnVsbCwgbnVsbCwgcm91dGVQYXRoKSk7XG4gICAgfVxuXG4gICAgc2hvd0luZm8obXNnOiBzdHJpbmcsIHJvdXRlUGF0aD86IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLm5leHQobmV3IFVzck1zZ0RldGFpbHMoXG4gICAgICAgICAgICBtc2csIFVzck1zZ0xldmVsLkluZm8sIFVzck1zZ1R5cGUuRmxlZXRpbmcsIG51bGwsIG51bGwsIG51bGwsIHJvdXRlUGF0aCkpO1xuICAgIH1cblxuICAgIHNob3dTdWNjZXNzKG1zZzogc3RyaW5nLCByb3V0ZVBhdGg/OiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZS5uZXh0KG5ldyBVc3JNc2dEZXRhaWxzKFxuICAgICAgICAgICAgbXNnLCBVc3JNc2dMZXZlbC5TdWNjZXNzLCBVc3JNc2dUeXBlLkZsZWV0aW5nLCBudWxsLCBudWxsLCBudWxsLCByb3V0ZVBhdGgpKTtcbiAgICB9XG5cbiAgICBzaG93TWVzc2FnZShtc2c6IHN0cmluZywgbGV2ZWw6IFVzck1zZ0xldmVsLCB0eXBlOiBVc3JNc2dUeXBlLFxuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnM/OiBVc3JNc2dQYXJhbXMpOiBQcm9taXNlPG51bGw+IHtcblxuICAgICAgICBsZXQge2NvbmZpcm1UZXh0LCBjYW5jZWxUZXh0LCBkaWFsb2dUaXRsZSwgcm91dGVQYXRofSA9IHBhcmFtZXRlcnM7XG4gICAgICAgIGxldCBtc2dPYmogPSBuZXcgVXNyTXNnRGV0YWlscyhtc2csIGxldmVsLCB0eXBlLFxuICAgICAgICAgICAgY29uZmlybVRleHQsIGNhbmNlbFRleHQsIGRpYWxvZ1RpdGxlLCByb3V0ZVBhdGgpO1xuICAgICAgICB0aGlzLm9ic2VydmFibGUubmV4dChtc2dPYmopO1xuICAgICAgICByZXR1cm4gbXNnT2JqLnByb21pc2U7XG4gICAgfVxuXG5cbn1cbiJdfQ==