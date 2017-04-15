import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Ng2BalloonMsgNsTestComponent} from "./test/ng2-balloon-msg-ns-test.component";
import {ArouteComponent} from "./aroute/aroute.component";


const routes = [
    {path: "aroute", component: ArouteComponent},
    {path: "", component: Ng2BalloonMsgNsTestComponent},
    {path: "**", component: Ng2BalloonMsgNsTestComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}