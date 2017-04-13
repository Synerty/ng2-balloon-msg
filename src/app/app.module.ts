import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";

import {Ng2BalloonMsgModule} from "../../";
import {Ng2BalloonMsgService} from "../../";
import {Ng2BalloonMsgTestComponent} from "./test/ng2-balloon-msg-test.component";

@NgModule({
    declarations: [
        AppComponent,
        Ng2BalloonMsgTestComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2BalloonMsgModule
    ],
    providers: [Ng2BalloonMsgService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
