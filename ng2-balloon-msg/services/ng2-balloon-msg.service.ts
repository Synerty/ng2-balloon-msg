import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

export enum UsrMsgLevel {
    Error = 1,
    Warning = 2,
    Info = 4,
    Success = 8
}

export enum UsrMsgType {
    Fleeting = 1,
    Sticky = 2,
    Confirm = 4,
    ConfirmCancel = 8
}


export class UsrMsgDetails {
    private static nextMsgId = 1;

    msgId: number;
    expired: boolean = false;
    promise: Promise<null> | null = null;

    private rejector: any = null;
    private resolver: any = null;

    constructor(public msg: string,
                public level: UsrMsgLevel,
                public type: UsrMsgType,
                public confirmText: string | null = null,
                public cancelText: string | null = null,
                public dialogTitle: string | null = null) {
        this.msgId = UsrMsgDetails.nextMsgId++;

        this.promise = new Promise<null>((resolver, rejector) => {
            this.resolver = resolver;
            this.rejector = rejector;
        });

    }

    // Level
    isSuccess = () => this.level === UsrMsgLevel.Success;
    isInfo = () => this.level === UsrMsgLevel.Info;
    isWarning = () => this.level === UsrMsgLevel.Warning;
    isError = () => this.level === UsrMsgLevel.Error;

    // Type
    isFleeting = () => this.type === UsrMsgType.Fleeting;
    isSticky = () => this.type === UsrMsgType.Sticky;
    isModal = () => this.isConfirm() || this.isConfirmCancel();
    isConfirm = () => this.type === UsrMsgType.Confirm;
    isConfirmCancel = () => this.type === UsrMsgType.ConfirmCancel;

    resolve() {
        if (this.resolver != null)
            this.resolver();

    }

    reject() {
        if (this.rejector != null)
            this.rejector();
    }

}

export interface UsrMsgParams {
    confirmText?: string | null,
    cancelText?: string | null,
    dialogTitle?: string | null
}

@Injectable()
export class Ng2BalloonMsgService {
    private observable: Subject<UsrMsgDetails>;

    constructor() {
        this.observable = new Subject<UsrMsgDetails>();

        console.log("Creating Ng2BalloonMsgService.")
    }

    getObservable() {
        return this.observable;
    }

    showError(msg: string): void {
        this.observable.next(new UsrMsgDetails(
            msg, UsrMsgLevel.Error, UsrMsgType.Sticky));
    }

    showWarning(msg: string): void {
        this.observable.next(new UsrMsgDetails(
            msg, UsrMsgLevel.Warning, UsrMsgType.Fleeting));
    }

    showInfo(msg: string): void {
        this.observable.next(new UsrMsgDetails(
            msg, UsrMsgLevel.Info, UsrMsgType.Fleeting));
    }

    showSuccess(msg: string): void {
        this.observable.next(new UsrMsgDetails(
            msg, UsrMsgLevel.Success, UsrMsgType.Fleeting));
    }

    showMessage(msg: string, level: UsrMsgLevel, type: UsrMsgType,
                parameters?: UsrMsgParams): Promise<null> {

        let {confirmText, cancelText, dialogTitle} = parameters;
        let msgObj = new UsrMsgDetails(msg, level, type, confirmText, cancelText, dialogTitle);
        this.observable.next(msgObj);
        return msgObj.promise;
    }


}
