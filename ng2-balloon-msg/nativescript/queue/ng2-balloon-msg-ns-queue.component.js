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
var ng2_balloon_msg_common_queue_component_1 = require("../../common/ng2-balloon-msg-common-queue.component");
var ng2_balloon_msg_service_1 = require("../../services/ng2-balloon-msg.service");
var Ng2BalloonMsgNsQueueComponent = /** @class */ (function (_super) {
    __extends(Ng2BalloonMsgNsQueueComponent, _super);
    function Ng2BalloonMsgNsQueueComponent(msgService) {
        var _this = _super.call(this, msgService) || this;
        _this.fullScreenNeededEvent = new core_1.EventEmitter();
        _this.showModalEvent.subscribe(function (val) { return _this.fullScreenNeededEvent.emit(val); });
        return _this;
    }
    __decorate([
        core_1.Output("fullScreenNeededEvent"),
        __metadata("design:type", Object)
    ], Ng2BalloonMsgNsQueueComponent.prototype, "fullScreenNeededEvent", void 0);
    Ng2BalloonMsgNsQueueComponent = __decorate([
        core_1.Component({
            selector: 'ng2-balloon-msg-ns',
            templateUrl: './ng2-balloon-msg-ns-queue.component.html',
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [ng2_balloon_msg_service_1.Ng2BalloonMsgService])
    ], Ng2BalloonMsgNsQueueComponent);
    return Ng2BalloonMsgNsQueueComponent;
}(ng2_balloon_msg_common_queue_component_1.Ng2BalloonMsgCommonQueueComponent));
exports.Ng2BalloonMsgNsQueueComponent = Ng2BalloonMsgNsQueueComponent;
//# sourceMappingURL=ng2-balloon-msg-ns-queue.component.js.map