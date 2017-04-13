var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, trigger, transition, state, animate, style } from "@angular/core";
import { UsrMsgDetails, UsrMsgLevel } from "../../services/service/ng2-balloon-msg.service";
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
        if (this.msgDetails.type !== UsrMsgLevel.Error) {
            setTimeout(function () { return _this.shown = false; }, this.showDuration);
            setTimeout(function () { return _this.msgDetails.expired = true; }, this.expireDuration);
        }
    };
    Ng2BalloonMsgItemComponent.prototype.clicked = function () {
        this.msgDetails.expired = true;
    };
    return Ng2BalloonMsgItemComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", typeof (_a = typeof UsrMsgDetails !== "undefined" && UsrMsgDetails) === "function" && _a || Object)
], Ng2BalloonMsgItemComponent.prototype, "msgDetails", void 0);
Ng2BalloonMsgItemComponent = __decorate([
    Component({
        selector: 'ng2-balloon-msg-item',
        templateUrl: 'ng2-balloon-msg-item.component.html',
        animations: [
            trigger('visibilityChanged', [
                state("shown", style({ opacity: 1 })),
                state("hidden", style({ opacity: 0 })),
                transition('* => *', animate('500ms'))
            ])
        ],
    }),
    __metadata("design:paramtypes", [])
], Ng2BalloonMsgItemComponent);
export { Ng2BalloonMsgItemComponent };
var _a;
//# sourceMappingURL=/home/peek/project/ng2-balloon-msg/ng2-balloon-msg/components/item/ng2-balloon-msg-item.component.js.map