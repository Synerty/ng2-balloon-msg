import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Ng2BalloonMsgItemComponent} from "../components/item/ng2-balloon-msg-item.component";
import {Ng2BalloonMsgTestComponent} from "../components/test/ng2-balloon-msg-test.component";
import {Ng2BalloonMsgQueueComponent} from "../components/queue/ng2-balloon-msg-queue.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        Ng2BalloonMsgQueueComponent,
        Ng2BalloonMsgTestComponent,
        Ng2BalloonMsgItemComponent
    ],
    declarations: [
        Ng2BalloonMsgQueueComponent,
        Ng2BalloonMsgTestComponent,
        Ng2BalloonMsgItemComponent
    ],
    providers: []
})
export class Ng2BalloonMsgModule {

}