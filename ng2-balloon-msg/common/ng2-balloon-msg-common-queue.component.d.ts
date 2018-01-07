import { OnInit } from "@angular/core";
import { Ng2BalloonMsgService, UsrMsgDetails } from "../services/ng2-balloon-msg.service";
export declare class Ng2BalloonMsgCommonQueueComponent implements OnInit {
    protected msgService: Ng2BalloonMsgService;
    private lastShowingModal;
    private lastShowingPopup;
    showModalEvent: any;
    showPopupEvent: any;
    protected readonly maxQueueLength: number;
    backlog: UsrMsgDetails[];
    protected _onScreen: UsrMsgDetails[];
    constructor(msgService: Ng2BalloonMsgService);
    ngOnInit(): void;
    getShown(): UsrMsgDetails[];
    isShowingModal(): boolean;
    isShowingPopup(): boolean;
}
