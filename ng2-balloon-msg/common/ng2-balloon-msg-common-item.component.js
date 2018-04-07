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
var ng2_balloon_msg_service_1 = require("../services/ng2-balloon-msg.service");
var Ng2BalloonMsgCommonItemComponent = /** @class */ (function () {
    function Ng2BalloonMsgCommonItemComponent(router) {
        this.router = router;
        this.shown = true;
        this.shownStr = "shown";
        // in ms, The time it takes for change of animation state
        this.animationDuration = 500;
        // in ms, The time it takes before it fades out
        this.showDuration = 2000;
        // in ms, The time to wait before expiring the message
        this.expireDuration = 3000; // showDuration + fade in/out time
        // in ms, Additional time to show the message for if it has a route
        this.withRouteDuration = 2000;
    }
    Ng2BalloonMsgCommonItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        var expireDuration = this.msgDetails.hasRoute()
            ? this.expireDuration + this.withRouteDuration
            : this.expireDuration;
        var showDuration = this.msgDetails.hasRoute()
            ? this.showDuration + this.withRouteDuration
            : this.showDuration;
        // Hide the message after a certain period.
        if (this.msgDetails.isFleeting()) {
            setTimeout(function () {
                _this.shown = false;
                _this.shownStr = "hidden";
            }, showDuration);
            setTimeout(function () {
                _this.msgDetails.expired = true;
            }, expireDuration);
        }
    };
    Ng2BalloonMsgCommonItemComponent.prototype.msgClicked = function () {
        this.msgDetails.expired = true;
    };
    Ng2BalloonMsgCommonItemComponent.prototype.openClicked = function () {
        this.msgDetails.expired = true;
        this.router.navigate([this.msgDetails.routePath]);
    };
    Ng2BalloonMsgCommonItemComponent.prototype.confirmClicked = function () {
        var _this = this;
        this.shownStr = "hidden";
        // Add 100ms to allow animations to complete
        setTimeout(function () {
            _this.msgDetails.resolve();
            _this.msgDetails.expired = true;
            _this.shown = false;
            // Route when they click ok
            if (_this.msgDetails.hasRoute())
                _this.router.navigate([_this.msgDetails.routePath]);
        }, this.animationDuration + 100);
    };
    Ng2BalloonMsgCommonItemComponent.prototype.cancelClicked = function () {
        var _this = this;
        this.shownStr = "hidden";
        setTimeout(function () {
            _this.msgDetails.reject();
            _this.msgDetails.expired = true;
            _this.shown = false;
        }, this.animationDuration + 100);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", ng2_balloon_msg_service_1.UsrMsgDetails)
    ], Ng2BalloonMsgCommonItemComponent.prototype, "msgDetails", void 0);
    return Ng2BalloonMsgCommonItemComponent;
}());
exports.Ng2BalloonMsgCommonItemComponent = Ng2BalloonMsgCommonItemComponent;
//# sourceMappingURL=ng2-balloon-msg-common-item.component.js.map