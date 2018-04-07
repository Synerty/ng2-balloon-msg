"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var router_1 = require("@angular/router");
var ng2_balloon_msg_common_item_component_1 = require("../../common/ng2-balloon-msg-common-item.component");
var Ng2BalloonMsgItemComponent = /** @class */ (function (_super) {
    __extends(Ng2BalloonMsgItemComponent, _super);
    function Ng2BalloonMsgItemComponent(router) {
        var _this = _super.call(this, router) || this;
        _this.router = router;
        return _this;
    }
    Ng2BalloonMsgItemComponent.prototype.ngAfterViewInit = function () {
        $('#ng2BalloonMsg' + this.msgDetails.msgId)["modal"]('show');
    };
    Ng2BalloonMsgItemComponent = __decorate([
        core_1.Component({
            selector: 'ng2-balloon-msg-item',
            templateUrl: './ng2-balloon-msg-web-item.component.html',
            animations: [
                core_1.trigger('msgPopup', [
                    core_1.state("void", core_1.style({
                        opacity: 0,
                        transform: 'scale(2)'
                    })),
                    core_1.state("shown", core_1.style({
                        opacity: 1,
                        transform: 'scale(1)'
                    })),
                    core_1.state("hidden", core_1.style({
                        opacity: 0,
                        transform: 'scale(0)'
                    })),
                    core_1.transition('* => *', core_1.animate('500ms'))
                ]),
                core_1.trigger('msgDialog', [
                    core_1.state("void", core_1.style({
                        opacity: 0,
                    })),
                    core_1.state("shown", core_1.style({
                        opacity: 1,
                    })),
                    core_1.state("hidden", core_1.style({
                        opacity: 0,
                    })),
                    core_1.transition('* => *', core_1.animate('500ms'))
                ])
            ],
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], Ng2BalloonMsgItemComponent);
    return Ng2BalloonMsgItemComponent;
}(ng2_balloon_msg_common_item_component_1.Ng2BalloonMsgCommonItemComponent));
exports.Ng2BalloonMsgItemComponent = Ng2BalloonMsgItemComponent;
//# sourceMappingURL=ng2-balloon-msg-web-item.component.js.map