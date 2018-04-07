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
var Ng2BalloonMsgNsItemComponent = /** @class */ (function (_super) {
    __extends(Ng2BalloonMsgNsItemComponent, _super);
    function Ng2BalloonMsgNsItemComponent(router) {
        var _this = _super.call(this, router) || this;
        _this.router = router;
        return _this;
    }
    Ng2BalloonMsgNsItemComponent = __decorate([
        core_1.Component({
            selector: 'ng2-balloon-msg-item-ns',
            templateUrl: './ng2-balloon-msg-ns-item.component.html',
            styleUrls: ['./ng2-balloon-msg-ns-item.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], Ng2BalloonMsgNsItemComponent);
    return Ng2BalloonMsgNsItemComponent;
}(ng2_balloon_msg_common_item_component_1.Ng2BalloonMsgCommonItemComponent));
exports.Ng2BalloonMsgNsItemComponent = Ng2BalloonMsgNsItemComponent;
//# sourceMappingURL=ng2-balloon-msg-ns-item.component.js.map