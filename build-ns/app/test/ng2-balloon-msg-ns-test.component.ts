import {Component} from "@angular/core";
import {
    Ng2BalloonMsgService,
    UsrMsgLevel,
    UsrMsgType
} from "../ng2-balloon-msg/services/ng2-balloon-msg.service";

@Component({
    selector: 'ng2-balloon-msg-ns-test',
    templateUrl: 'ng2-balloon-msg-ns-test.component.html',
    moduleId:module.id
})
export class Ng2BalloonMsgNsTestComponent {

    constructor(private msgService: Ng2BalloonMsgService) {
    }

    showSuccess() {
        this.msgService.showSuccess("This is a test SUCCESS");
    }

    showInfo() {
        this.msgService.showInfo("This is a test info with route", "/aroute");
    }

    showWarning() {
        this.msgService.showWarning("This is a test warning");
    }

    showError() {
        this.msgService.showError("This is a test error. Click to dismiss");
    }

    showWarningConfirmWithRoute() {
        let p = this.msgService.showMessage(
            "This is a Warning confirm with route.",
            UsrMsgLevel.Warning,
            UsrMsgType.Confirm, {
                confirmText: "OK Confirm",
                routePath: '/aroute'
            });
    }

    showSuccessConfirm() {
        let p = this.msgService.showMessage(
            "This is a success confirm.",
            UsrMsgLevel.Success,
            UsrMsgType.Confirm, {
                confirmText: "OK Confirm"
            });
    }

    showErrorConfirmCancel() {
        let p = this.msgService.showMessage(
            "This is a Error Confirm Cancel.",
            UsrMsgLevel.Error,
            UsrMsgType.ConfirmCancel, {
                confirmText: "OK Confirm",
                cancelText: "Cancel xx",
                dialogTitle: "Awesome title"

            }
        );

        p.catch(err => {
            console.log("Ignoring reject call from promise for this test.");
        })
    }

}
