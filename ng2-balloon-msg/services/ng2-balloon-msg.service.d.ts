export declare enum UsrMsgLevel {
    Error = 1,
    Warning = 2,
    Info = 4,
    Success = 8,
}
export declare enum UsrMsgType {
    Fleeting = 1,
    Sticky = 2,
    Confirm = 4,
    ConfirmCancel = 8,
}
export declare class UsrMsgDetails {
    msg: string;
    level: UsrMsgLevel;
    type: UsrMsgType;
    confirmText: string | null;
    cancelText: string | null;
    dialogTitle: string | null;
    routePath: string | null;
    private static nextMsgId;
    msgId: number;
    expired: boolean;
    promise: Promise<null> | null;
    private rejector;
    private resolver;
    constructor(msg: string, level: UsrMsgLevel, type: UsrMsgType, confirmText?: string | null, cancelText?: string | null, dialogTitle?: string | null, routePath?: string | null);
    isSuccess(): boolean;
    isInfo(): boolean;
    isWarning(): boolean;
    isError(): boolean;
    isFleeting(): boolean;
    isSticky(): boolean;
    isConfirm(): boolean;
    isConfirmCancel(): boolean;
    isModal(): boolean;
    hasRoute(): boolean;
    resolve(): void;
    reject(): void;
}
export interface UsrMsgParams {
    confirmText?: string | null;
    cancelText?: string | null;
    dialogTitle?: string | null;
    routePath?: string | null;
}
export declare class Ng2BalloonMsgService {
    private observable;
    constructor();
    getObservable(): any;
    showError(msg: string, routePath?: string | null): void;
    showWarning(msg: string, routePath?: string | null): void;
    showInfo(msg: string, routePath?: string | null): void;
    showSuccess(msg: string, routePath?: string | null): void;
    showMessage(msg: string, level: UsrMsgLevel, type: UsrMsgType, parameters?: UsrMsgParams): Promise<null>;
}
