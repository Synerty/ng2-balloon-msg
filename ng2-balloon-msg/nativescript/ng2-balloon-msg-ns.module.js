"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ng2_balloon_msg_ns_queue_component_1 = require("./queue/ng2-balloon-msg-ns-queue.component");
var ng2_balloon_msg_ns_item_component_1 = require("./item/ng2-balloon-msg-ns-item.component");
var Ng2BalloonMsgNsModule = /** @class */ (function () {
    function Ng2BalloonMsgNsModule() {
    }
    Ng2BalloonMsgNsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
            ],
            exports: [
                ng2_balloon_msg_ns_queue_component_1.Ng2BalloonMsgNsQueueComponent,
                ng2_balloon_msg_ns_item_component_1.Ng2BalloonMsgNsItemComponent
            ],
            declarations: [
                ng2_balloon_msg_ns_queue_component_1.Ng2BalloonMsgNsQueueComponent,
                ng2_balloon_msg_ns_item_component_1.Ng2BalloonMsgNsItemComponent
            ],
            providers: []
        })
    ], Ng2BalloonMsgNsModule);
    return Ng2BalloonMsgNsModule;
}());
exports.Ng2BalloonMsgNsModule = Ng2BalloonMsgNsModule;
//# sourceMappingURL=ng2-balloon-msg-ns.module.js.map