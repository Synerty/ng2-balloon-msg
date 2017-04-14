"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./app.component");
var ng2_balloon_msg_ns_test_component_1 = require("./test/ng2-balloon-msg-ns-test.component");
var ng2_balloon_msg_ns_module_1 = require("./ng2-balloon-msg/nativescript/ng2-balloon-msg-ns.module");
var ng2_balloon_msg_service_1 = require("./ng2-balloon-msg/services/ng2-balloon-msg.service");
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
            ng2_balloon_msg_ns_module_1.Ng2BalloonMsgNsModule
        ],
        declarations: [
            app_component_1.AppComponent, ng2_balloon_msg_ns_test_component_1.Ng2BalloonMsgNsTestComponent
        ],
        providers: [ng2_balloon_msg_service_1.Ng2BalloonMsgService],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RDtBQUN6RCxnRkFBNEU7QUFDNUUsaURBQTZDO0FBRTdDLDhGQUFzRjtBQUN0RixzR0FBK0Y7QUFDL0YsOEZBQXdGO0FBa0J4RixJQUFhLFNBQVM7SUFBdEI7SUFDQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBREQsSUFDQztBQURZLFNBQVM7SUFoQnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsaURBQXFCO1NBQ3hCO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVksRUFBRSxnRUFBNEI7U0FDN0M7UUFDRCxTQUFTLEVBQUUsQ0FBQyw4Q0FBb0IsQ0FBQztRQUNqQyxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csU0FBUyxDQUNyQjtBQURZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHtOZzJCYWxsb29uTXNnTnNUZXN0Q29tcG9uZW50fSBmcm9tIFwiLi90ZXN0L25nMi1iYWxsb29uLW1zZy1ucy10ZXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOZzJCYWxsb29uTXNnTnNNb2R1bGV9IGZyb20gXCIuL25nMi1iYWxsb29uLW1zZy9uYXRpdmVzY3JpcHQvbmcyLWJhbGxvb24tbXNnLW5zLm1vZHVsZVwiO1xuaW1wb3J0IHtOZzJCYWxsb29uTXNnU2VydmljZX0gZnJvbSBcIi4vbmcyLWJhbGxvb24tbXNnL3NlcnZpY2VzL25nMi1iYWxsb29uLW1zZy5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5nMkJhbGxvb25Nc2dOc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCwgTmcyQmFsbG9vbk1zZ05zVGVzdENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbTmcyQmFsbG9vbk1zZ1NlcnZpY2VdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cbiJdfQ==