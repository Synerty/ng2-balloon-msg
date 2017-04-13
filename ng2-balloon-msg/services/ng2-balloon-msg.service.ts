import {Injectable} from "@angular/core";
import {Observable, Observer} from "rxjs";

export enum UsrMsgLevel {
    Error = 1,
    Warning = 2,
    Info = 3,
    Success = 4
}

export class UsrMsgDetails {
    expired: boolean = false;

    constructor(public msg: string,
                public type: UsrMsgLevel) {
    }

    isSuccess = () => this.type === UsrMsgLevel.Success;
    isInfo = () => this.type === UsrMsgLevel.Info;
    isWarning = () => this.type === UsrMsgLevel.Warning;
    isError = () => this.type === UsrMsgLevel.Error;
}

@Injectable()
export class Ng2BalloonMsgService {
    private observable: Observable<UsrMsgDetails>;
    private observer: Observer<UsrMsgDetails>;

    constructor() {
        this.observable = Observable.create(observer => this.observer = observer);
        // Call subscribe, otherwise the observer is never created
        this.observable.subscribe();
    }

    getObservable() {
        return this.observable;
    }

    showError(msg: string): void {
        this.observer.next(new UsrMsgDetails(msg, UsrMsgLevel.Error));
    }

    showWarning(msg: string): void {
        this.observer.next(new UsrMsgDetails(msg, UsrMsgLevel.Warning));
    }

    showInfo(msg: string): void {
        this.observer.next(new UsrMsgDetails(msg, UsrMsgLevel.Info));
    }

    showSuccess(msg: string): void {
        this.observer.next(new UsrMsgDetails(msg, UsrMsgLevel.Success));
    }

}
