import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

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
                public dialogTitle: string | null = null,
                public routePath: string | null = null) {
        this.msgId = UsrMsgDetails.nextMsgId++;

        if (this.confirmText == null)
            this.confirmText = "Confirm";

        if (this.cancelText == null)
            this.cancelText = "Cancel";

        this.promise = new Promise<null>((resolver, rejector) => {
            this.resolver = resolver;
            this.rejector = rejector;
        });

    }

    // Level
    isSuccess() {
        return this.level === UsrMsgLevel.Success;
    };

    isInfo() {
        return this.level === UsrMsgLevel.Info;
    }

    isWarning() {
        return this.level === UsrMsgLevel.Warning;
    }

    isError() {
        return this.level === UsrMsgLevel.Error;
    }


    // Type
    isFleeting() {
        return this.type === UsrMsgType.Fleeting;
    }

    isSticky() {
        return this.type === UsrMsgType.Sticky;
    }

    isConfirm() {
        return this.type === UsrMsgType.Confirm;
    }

    isConfirmCancel() {
        return this.type === UsrMsgType.ConfirmCancel;
    }


    // Other
    isModal() {
        return this.isConfirm() || this.isConfirmCancel();
    }

    hasRoute() {
        return this.routePath != null;
    }


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
    dialogTitle?: string | null,
    routePath?: string | null
}

@Injectable()
export class Ng2BalloonMsgService {
    private observable: Subject<UsrMsgDetails>;

    constructor() {
        this.observable = new Subject<UsrMsgDetails>();
    }

    getObservable() {
        return this.observable;
    }

    showError(msg: string, routePath?: string | null): void {
        this.observable.next(new UsrMsgDetails(
            msg, UsrMsgLevel.Error, UsrMsgType.Sticky, null, null, null, routePath));
    }

    showWarning(msg: string, routePath?: string | null): void {
        this.observable.next(new UsrMsgDetails(
            msg, UsrMsgLevel.Warning, UsrMsgType.Fleeting, null, null, null, routePath));
    }

    showInfo(msg: string, routePath?: string | null): void {
        this.observable.next(new UsrMsgDetails(
            msg, UsrMsgLevel.Info, UsrMsgType.Fleeting, null, null, null, routePath));
    }

    showSuccess(msg: string, routePath?: string | null): void {
        this.observable.next(new UsrMsgDetails(
            msg, UsrMsgLevel.Success, UsrMsgType.Fleeting, null, null, null, routePath));
    }

    showMessage(msg: string, level: UsrMsgLevel, type: UsrMsgType,
                parameters: UsrMsgParams = {}): Promise<null> {

        let {confirmText, cancelText, dialogTitle, routePath} = parameters;
        let msgObj = new UsrMsgDetails(msg, level, type,
            confirmText, cancelText, dialogTitle, routePath);
        this.observable.next(msgObj);
        return msgObj.promise;
    }


}
