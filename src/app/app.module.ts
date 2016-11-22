import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { Ng2BalloonMsgModule } from "../modules/ng2-balloon-msg.module"
import { Ng2BalloonMsgService} from "../services/service/ng2-balloon-msg.service"

@NgModule({
  declarations: [
    AppComponent
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
export class AppModule { }
