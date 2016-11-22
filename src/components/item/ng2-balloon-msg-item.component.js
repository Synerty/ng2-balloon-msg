"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ng2_balloon_msg_service_1 = require("../../services/service/ng2-balloon-msg.service");
var Ng2BalloonMsgItemComponent = (function () {
    function Ng2BalloonMsgItemComponent() {
        this.shown = true;
        // in ms, The time it takes before it fades out
        this.showDuration = 2000;
        // in ms, The time to wait before expiring the message
        this.expireDuration = 3000; // showDuration + fade in/out time
    }
    Ng2BalloonMsgItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Hide the message after a certain period.
        if (this.msgDetails.type !== ng2_balloon_msg_service_1.UsrMsgLevel.Error) {
            setTimeout(function () { return _this.shown = false; }, this.showDuration);
            setTimeout(function () { return _this.msgDetails.expired = true; }, this.expireDuration);
        }
    };
    Ng2BalloonMsgItemComponent.prototype.clicked = function () {
        this.msgDetails.expired = true;
    };
    __decorate([
        core_1.Input()
    ], Ng2BalloonMsgItemComponent.prototype, "msgDetails", void 0);
    Ng2BalloonMsgItemComponent = __decorate([
        core_1.Component({
            selector: 'ng2-balloon-msg-item',
            templateUrl: 'ng2-balloon-msg-item.component.html',
            animations: [
                core_1.trigger('visibilityChanged', [
                    core_1.state("shown", core_1.style({ opacity: 1 })),
                    core_1.state("hidden", core_1.style({ opacity: 0 })),
                    core_1.transition('* => *', core_1.animate('500ms'))
                ])
            ],
        })
    ], Ng2BalloonMsgItemComponent);
    return Ng2BalloonMsgItemComponent;
}());
exports.Ng2BalloonMsgItemComponent = Ng2BalloonMsgItemComponent;
