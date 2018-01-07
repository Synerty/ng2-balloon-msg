import { AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { Ng2BalloonMsgCommonItemComponent } from "../../common/ng2-balloon-msg-common-item.component";
export declare class Ng2BalloonMsgItemComponent extends Ng2BalloonMsgCommonItemComponent implements AfterViewInit {
    protected router: Router;
    constructor(router: Router);
    ngAfterViewInit(): void;
}
