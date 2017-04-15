"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./app.component");
var ng2_balloon_msg_ns_test_component_1 = require("./test/ng2-balloon-msg-ns-test.component");
var ng2_balloon_msg_ns_module_1 = require("./ng2-balloon-msg/nativescript/ng2-balloon-msg-ns.module");
var ng2_balloon_msg_service_1 = require("./ng2-balloon-msg/services/ng2-balloon-msg.service");
var app_routing_1 = require("./app.routing");
var aroute_component_1 = require("./aroute/aroute.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            ng2_balloon_msg_ns_module_1.Ng2BalloonMsgNsModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent, ng2_balloon_msg_ns_test_component_1.Ng2BalloonMsgNsTestComponent, aroute_component_1.ArouteComponent
        ],
        providers: [ng2_balloon_msg_service_1.Ng2BalloonMsgService],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RDtBQUN6RCxnRkFBNEU7QUFDNUUsaURBQTZDO0FBRTdDLDhGQUFzRjtBQUN0RixzR0FBK0Y7QUFDL0YsOEZBQXdGO0FBQ3hGLDZDQUErQztBQUMvQyw4REFBMEQ7QUFvQjFELElBQWEsU0FBUztJQUF0QjtJQUNBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFERCxJQUNDO0FBRFksU0FBUztJQWpCckIsZUFBUSxDQUFDO1FBQ04sU0FBUyxFQUFFO1lBQ1AsNEJBQVk7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQixpREFBcUI7WUFDckIsOEJBQWdCO1NBQ25CO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVksRUFBRSxnRUFBNEIsRUFBRSxrQ0FBZTtTQUM5RDtRQUNELFNBQVMsRUFBRSxDQUFDLDhDQUFvQixDQUFDO1FBQ2pDLE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQ3JCO0FBRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQge05nMkJhbGxvb25Nc2dOc1Rlc3RDb21wb25lbnR9IGZyb20gXCIuL3Rlc3QvbmcyLWJhbGxvb24tbXNnLW5zLXRlc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge05nMkJhbGxvb25Nc2dOc01vZHVsZX0gZnJvbSBcIi4vbmcyLWJhbGxvb24tbXNnL25hdGl2ZXNjcmlwdC9uZzItYmFsbG9vbi1tc2ctbnMubW9kdWxlXCI7XG5pbXBvcnQge05nMkJhbGxvb25Nc2dTZXJ2aWNlfSBmcm9tIFwiLi9uZzItYmFsbG9vbi1tc2cvc2VydmljZXMvbmcyLWJhbGxvb24tbXNnLnNlcnZpY2VcIjtcbmltcG9ydCB7QXBwUm91dGluZ01vZHVsZX0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7QXJvdXRlQ29tcG9uZW50fSBmcm9tIFwiLi9hcm91dGUvYXJvdXRlLmNvbXBvbmVudFwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5nMkJhbGxvb25Nc2dOc01vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCwgTmcyQmFsbG9vbk1zZ05zVGVzdENvbXBvbmVudCwgQXJvdXRlQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtOZzJCYWxsb29uTXNnU2VydmljZV0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIl19