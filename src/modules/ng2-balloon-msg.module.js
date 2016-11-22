"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var rapui_usr_msg_item_component_1 = require("./usr-msg-item-comp/ng2-balloon-msg-item.component");
var rapui_usr_msg_test_component_1 = require("./components/usr-msg-test-comp/ng2-balloon-msg-test.component");
var rapui_usr_msg_component_1 = require("./usr-msg-comp/ng2-balloon-msg.component");
var Ng2BalloonMsgModule = (function () {
    function Ng2BalloonMsgModule() {
    }
    Ng2BalloonMsgModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
            ],
            exports: [
                rapui_usr_msg_component_1.Ng2BalloonMsgComponent,
                rapui_usr_msg_test_component_1.Ng2BalloonMsgTestComponent,
                rapui_usr_msg_item_component_1.Ng2BalloonMsgItemComponent
            ],
            declarations: [
                rapui_usr_msg_component_1.Ng2BalloonMsgComponent,
                rapui_usr_msg_test_component_1.Ng2BalloonMsgTestComponent,
                rapui_usr_msg_item_component_1.Ng2BalloonMsgItemComponent
            ],
            providers: []
        })
    ], Ng2BalloonMsgModule);
    return Ng2BalloonMsgModule;
}());
exports.Ng2BalloonMsgModule = Ng2BalloonMsgModule;
//
//
// // Convert all the module exports into a relative export from here
// export * from "./usr-msg-item-comp/ng2-balloon-msg-item.component";
// export * from "./usr-msg-test-comp/ng2-balloon-msg-test.component";
// export * from "./usr-msg-comp/ng2-balloon-msg.component";
// export * from "./usr-msg-service/ng2-balloon-msg.service"; 
