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
    function UsrMsgDetails(msg, level, type, confirmText, cancelText, dialogTitle) {
        if (confirmText === void 0) { confirmText = null; }
        if (cancelText === void 0) { cancelText = null; }
        if (dialogTitle === void 0) { dialogTitle = null; }
        var _this = this;
        this.msg = msg;
        this.level = level;
        this.type = type;
        this.confirmText = confirmText;
        this.cancelText = cancelText;
        this.dialogTitle = dialogTitle;
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
        this.isModal = function () { return _this.isConfirm() || _this.isConfirmCancel(); };
        this.isConfirm = function () { return _this.type === UsrMsgType.Confirm; };
        this.isConfirmCancel = function () { return _this.type === UsrMsgType.ConfirmCancel; };
        this.msgId = UsrMsgDetails.nextMsgId++;
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
    Ng2BalloonMsgService.prototype.showError = function (msg) {
        this.observable.next(new UsrMsgDetails(msg, UsrMsgLevel.Error, UsrMsgType.Sticky));
    };
    Ng2BalloonMsgService.prototype.showWarning = function (msg) {
        this.observable.next(new UsrMsgDetails(msg, UsrMsgLevel.Warning, UsrMsgType.Fleeting));
    };
    Ng2BalloonMsgService.prototype.showInfo = function (msg) {
        this.observable.next(new UsrMsgDetails(msg, UsrMsgLevel.Info, UsrMsgType.Fleeting));
    };
    Ng2BalloonMsgService.prototype.showSuccess = function (msg) {
        this.observable.next(new UsrMsgDetails(msg, UsrMsgLevel.Success, UsrMsgType.Fleeting));
    };
    Ng2BalloonMsgService.prototype.showMessage = function (msg, level, type, parameters) {
        var confirmText = parameters.confirmText, cancelText = parameters.cancelText, dialogTitle = parameters.dialogTitle;
        var msgObj = new UsrMsgDetails(msg, level, type, confirmText, cancelText, dialogTitle);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWJhbGxvb24tbXNnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzItYmFsbG9vbi1tc2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBQ3pDLDZCQUE2QjtBQUU3QixJQUFZLFdBS1g7QUFMRCxXQUFZLFdBQVc7SUFDbkIsK0NBQVMsQ0FBQTtJQUNULG1EQUFXLENBQUE7SUFDWCw2Q0FBUSxDQUFBO0lBQ1IsbURBQVcsQ0FBQTtBQUNmLENBQUMsRUFMVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUt0QjtBQUVELElBQVksVUFLWDtBQUxELFdBQVksVUFBVTtJQUNsQixtREFBWSxDQUFBO0lBQ1osK0NBQVUsQ0FBQTtJQUNWLGlEQUFXLENBQUE7SUFDWCw2REFBaUIsQ0FBQTtBQUNyQixDQUFDLEVBTFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFLckI7QUFHRDtJQVVJLHVCQUFtQixHQUFXLEVBQ1gsS0FBa0IsRUFDbEIsSUFBZ0IsRUFDaEIsV0FBaUMsRUFDakMsVUFBZ0MsRUFDaEMsV0FBaUM7UUFGakMsNEJBQUEsRUFBQSxrQkFBaUM7UUFDakMsMkJBQUEsRUFBQSxpQkFBZ0M7UUFDaEMsNEJBQUEsRUFBQSxrQkFBaUM7UUFMcEQsaUJBYUM7UUFia0IsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7UUFDakMsZUFBVSxHQUFWLFVBQVUsQ0FBc0I7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO1FBWHBELFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsWUFBTyxHQUF5QixJQUFJLENBQUM7UUFFN0IsYUFBUSxHQUFRLElBQUksQ0FBQztRQUNyQixhQUFRLEdBQVEsSUFBSSxDQUFDO1FBaUI3QixRQUFRO1FBQ1IsY0FBUyxHQUFH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QUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsMENBQVcsR0FBWCxVQUFZLEdBQVc7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFhLENBQ2xDLEdBQUcsRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksR0FBVyxFQUFFLEtBQWtCLEVBQUUsSUFBZ0IsRUFDakQsVUFBeUI7UUFFNUIsSUFBQSxvQ0FBVyxFQUFFLGtDQUFVLEVBQUUsb0NBQVcsQ0FBZTtRQUN4RCxJQUFJLE1BQU0sR0FBRyxJQUFJLGFBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQzFCLENBQUM7SUFHTCwyQkFBQztBQUFELENBQUMsQUEzQ0QsSUEyQ0M7QUEzQ1ksb0JBQW9CO0lBRGhDLGlCQUFVLEVBQUU7O0dBQ0Esb0JBQW9CLENBMkNoQztBQTNDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBlbnVtIFVzck1zZ0xldmVsIHtcbiAgICBFcnJvciA9IDEsXG4gICAgV2FybmluZyA9IDIsXG4gICAgSW5mbyA9IDQsXG4gICAgU3VjY2VzcyA9IDhcbn1cblxuZXhwb3J0IGVudW0gVXNyTXNnVHlwZSB7XG4gICAgRmxlZXRpbmcgPSAxLFxuICAgIFN0aWNreSA9IDIsXG4gICAgQ29uZmlybSA9IDQsXG4gICAgQ29uZmlybUNhbmNlbCA9IDhcbn1cblxuXG5leHBvcnQgY2xhc3MgVXNyTXNnRGV0YWlscyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgbmV4dE1zZ0lkID0gMTtcblxuICAgIG1zZ0lkOiBudW1iZXI7XG4gICAgZXhwaXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb21pc2U6IFByb21pc2U8bnVsbD4gfCBudWxsID0gbnVsbDtcblxuICAgIHByaXZhdGUgcmVqZWN0b3I6IGFueSA9IG51bGw7XG4gICAgcHJpdmF0ZSByZXNvbHZlcjogYW55ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtc2c6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBwdWJsaWMgbGV2ZWw6IFVzck1zZ0xldmVsLFxuICAgICAgICAgICAgICAgIHB1YmxpYyB0eXBlOiBVc3JNc2dUeXBlLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBjb25maXJtVGV4dDogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4gICAgICAgICAgICAgICAgcHVibGljIGNhbmNlbFRleHQ6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBkaWFsb2dUaXRsZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5tc2dJZCA9IFVzck1zZ0RldGFpbHMubmV4dE1zZ0lkKys7XG5cbiAgICAgICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2U8bnVsbD4oKHJlc29sdmVyLCByZWplY3RvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlciA9IHJlc29sdmVyO1xuICAgICAgICAgICAgdGhpcy5yZWplY3RvciA9IHJlamVjdG9yO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vIExldmVsXG4gICAgaXNTdWNjZXNzID0gKCkgPT4gdGhpcy5sZXZlbCA9PT0gVXNyTXNnTGV2ZWwuU3VjY2VzcztcbiAgICBpc0luZm8gPSAoKSA9PiB0aGlzLmxldmVsID09PSBVc3JNc2dMZXZlbC5JbmZvO1xuICAgIGlzV2FybmluZyA9ICgpID0+IHRoaXMubGV2ZWwgPT09IFVzck1zZ0xldmVsLldhcm5pbmc7XG4gICAgaXNFcnJvciA9ICgpID0+IHRoaXMubGV2ZWwgPT09IFVzck1zZ0xldmVsLkVycm9yO1xuXG4gICAgLy8gVHlwZVxuICAgIGlzRmxlZXRpbmcgPSAoKSA9PiB0aGlzLnR5cGUgPT09IFVzck1zZ1R5cGUuRmxlZXRpbmc7XG4gICAgaXNTdGlja3kgPSAoKSA9PiB0aGlzLnR5cGUgPT09IFVzck1zZ1R5cGUuU3RpY2t5O1xuICAgIGlzTW9kYWwgPSAoKSA9PiB0aGlzLmlzQ29uZmlybSgpIHx8IHRoaXMuaXNDb25maXJtQ2FuY2VsKCk7XG4gICAgaXNDb25maXJtID0gKCkgPT4gdGhpcy50eXBlID09PSBVc3JNc2dUeXBlLkNvbmZpcm07XG4gICAgaXNDb25maXJtQ2FuY2VsID0gKCkgPT4gdGhpcy50eXBlID09PSBVc3JNc2dUeXBlLkNvbmZpcm1DYW5jZWw7XG5cbiAgICByZXNvbHZlKCkge1xuICAgICAgICBpZiAodGhpcy5yZXNvbHZlciAhPSBudWxsKVxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlcigpO1xuXG4gICAgfVxuXG4gICAgcmVqZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5yZWplY3RvciAhPSBudWxsKVxuICAgICAgICAgICAgdGhpcy5yZWplY3RvcigpO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzck1zZ1BhcmFtcyB7XG4gICAgY29uZmlybVRleHQ/OiBzdHJpbmcgfCBudWxsLFxuICAgIGNhbmNlbFRleHQ/OiBzdHJpbmcgfCBudWxsLFxuICAgIGRpYWxvZ1RpdGxlPzogc3RyaW5nIHwgbnVsbFxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmcyQmFsbG9vbk1zZ1NlcnZpY2Uge1xuICAgIHByaXZhdGUgb2JzZXJ2YWJsZTogU3ViamVjdDxVc3JNc2dEZXRhaWxzPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9ic2VydmFibGUgPSBuZXcgU3ViamVjdDxVc3JNc2dEZXRhaWxzPigpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgTmcyQmFsbG9vbk1zZ1NlcnZpY2UuXCIpXG4gICAgfVxuXG4gICAgZ2V0T2JzZXJ2YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2YWJsZTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3IobXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLm5leHQobmV3IFVzck1zZ0RldGFpbHMoXG4gICAgICAgICAgICBtc2csIFVzck1zZ0xldmVsLkVycm9yLCBVc3JNc2dUeXBlLlN0aWNreSkpO1xuICAgIH1cblxuICAgIHNob3dXYXJuaW5nKG1zZzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZS5uZXh0KG5ldyBVc3JNc2dEZXRhaWxzKFxuICAgICAgICAgICAgbXNnLCBVc3JNc2dMZXZlbC5XYXJuaW5nLCBVc3JNc2dUeXBlLkZsZWV0aW5nKSk7XG4gICAgfVxuXG4gICAgc2hvd0luZm8obXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLm5leHQobmV3IFVzck1zZ0RldGFpbHMoXG4gICAgICAgICAgICBtc2csIFVzck1zZ0xldmVsLkluZm8sIFVzck1zZ1R5cGUuRmxlZXRpbmcpKTtcbiAgICB9XG5cbiAgICBzaG93U3VjY2Vzcyhtc2c6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLm9ic2VydmFibGUubmV4dChuZXcgVXNyTXNnRGV0YWlscyhcbiAgICAgICAgICAgIG1zZywgVXNyTXNnTGV2ZWwuU3VjY2VzcywgVXNyTXNnVHlwZS5GbGVldGluZykpO1xuICAgIH1cblxuICAgIHNob3dNZXNzYWdlKG1zZzogc3RyaW5nLCBsZXZlbDogVXNyTXNnTGV2ZWwsIHR5cGU6IFVzck1zZ1R5cGUsXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVycz86IFVzck1zZ1BhcmFtcyk6IFByb21pc2U8bnVsbD4ge1xuXG4gICAgICAgIGxldCB7Y29uZmlybVRleHQsIGNhbmNlbFRleHQsIGRpYWxvZ1RpdGxlfSA9IHBhcmFtZXRlcnM7XG4gICAgICAgIGxldCBtc2dPYmogPSBuZXcgVXNyTXNnRGV0YWlscyhtc2csIGxldmVsLCB0eXBlLCBjb25maXJtVGV4dCwgY2FuY2VsVGV4dCwgZGlhbG9nVGl0bGUpO1xuICAgICAgICB0aGlzLm9ic2VydmFibGUubmV4dChtc2dPYmopO1xuICAgICAgICByZXR1cm4gbXNnT2JqLnByb21pc2U7XG4gICAgfVxuXG5cbn1cbiJdfQ==