import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsrMsgDetails } from "../services/ng2-balloon-msg.service";
export declare class Ng2BalloonMsgCommonItemComponent implements OnInit {
    protected router: Router;
    msgDetails: UsrMsgDetails;
    shown: boolean;
    shownStr: string;
    protected readonly animationDuration: number;
    protected readonly showDuration: number;
    protected readonly expireDuration: number;
    protected readonly withRouteDuration: number;
    constructor(router: Router);
    ngOnInit(): void;
    msgClicked(): void;
    openClicked(): void;
    confirmClicked(): void;
    cancelClicked(): void;
}
