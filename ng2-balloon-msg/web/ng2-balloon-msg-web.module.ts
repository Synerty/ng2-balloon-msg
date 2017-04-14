import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Ng2BalloonMsgItemComponent} from "./item/ng2-balloon-msg-web-item.component";
import {Ng2BalloonMsgQueueComponent} from "./queue/ng2-balloon-msg-web-queue.component";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        Ng2BalloonMsgQueueComponent,
        Ng2BalloonMsgItemComponent
    ],
    declarations: [
        Ng2BalloonMsgQueueComponent,
        Ng2BalloonMsgItemComponent
    ],
    providers: []
})
export class Ng2BalloonMsgModule {

}