import {NgModule} from "@angular/core";
import {ArouteComponent} from "./aroute/aroute.component";
import {RouterModule} from "@angular/router";
import {Ng2BalloonMsgTestComponent} from "./test/ng2-balloon-msg-test.component";


const routes = [
    {path: "aroute", component: ArouteComponent},
    {path: "", component: Ng2BalloonMsgTestComponent},
    {path: "**", component: ArouteComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}