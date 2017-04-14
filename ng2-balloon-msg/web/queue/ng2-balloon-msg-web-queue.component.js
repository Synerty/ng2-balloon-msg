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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_balloon_msg_common_queue_component_1 = require("../../common/ng2-balloon-msg-common-queue.component");
var Ng2BalloonMsgQueueComponent = (function (_super) {
    __extends(Ng2BalloonMsgQueueComponent, _super);
    function Ng2BalloonMsgQueueComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ng2BalloonMsgQueueComponent;
}(ng2_balloon_msg_common_queue_component_1.Ng2BalloonMsgCommonQueueComponent));
Ng2BalloonMsgQueueComponent = __decorate([
    core_1.Component({
        selector: 'ng2-balloon-msg',
        templateUrl: './ng2-balloon-msg-web-queue.component.html',
        styleUrls: ['./ng2-balloon-msg-web-queue.component.css']
    })
], Ng2BalloonMsgQueueComponent);
exports.Ng2BalloonMsgQueueComponent = Ng2BalloonMsgQueueComponent;
//# sourceMappingURL=ng2-balloon-msg-web-queue.component.js.map