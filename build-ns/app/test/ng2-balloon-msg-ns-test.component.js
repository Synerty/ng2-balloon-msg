"use strict";
var core_1 = require("@angular/core");
var ng2_balloon_msg_service_1 = require("../ng2-balloon-msg/services/ng2-balloon-msg.service");
var Ng2BalloonMsgNsTestComponent = (function () {
    function Ng2BalloonMsgNsTestComponent(msgService) {
        this.msgService = msgService;
    }
    Ng2BalloonMsgNsTestComponent.prototype.showSuccess = function () {
        this.msgService.showSuccess("This is a test SUCCESS");
    };
    Ng2BalloonMsgNsTestComponent.prototype.showInfo = function () {
        this.msgService.showInfo("This is a test info");
    };
    Ng2BalloonMsgNsTestComponent.prototype.showWarning = function () {
        this.msgService.showWarning("This is a test warning");
    };
    Ng2BalloonMsgNsTestComponent.prototype.showError = function () {
        this.msgService.showError("This is a test error. Click to dismiss");
    };
    Ng2BalloonMsgNsTestComponent.prototype.showSuccessConfirm = function () {
        var p = this.msgService.showMessage("This is a success confirm.", ng2_balloon_msg_service_1.UsrMsgLevel.Success, ng2_balloon_msg_service_1.UsrMsgType.Confirm, {
            confirmText: "OK Confirm"
        });
    };
    Ng2BalloonMsgNsTestComponent.prototype.showErrorConfirmCancel = function () {
        var p = this.msgService.showMessage("This is a Error Confirm Cancel.", ng2_balloon_msg_service_1.UsrMsgLevel.Error, ng2_balloon_msg_service_1.UsrMsgType.ConfirmCancel, {
            confirmText: "OK Confirm",
            cancelText: "Cancel xx",
            dialogTitle: "Awesome title"
        });
        p.catch(function (err) {
            console.log("Ignoring reject call from promise for this test.");
        });
    };
    return Ng2BalloonMsgNsTestComponent;
}());
Ng2BalloonMsgNsTestComponent = __decorate([
    core_1.Component({
        selector: 'ng2-balloon-msg-ns-test',
        templateUrl: 'ng2-balloon-msg-ns-test.component.html',
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [ng2_balloon_msg_service_1.Ng2BalloonMsgService])
], Ng2BalloonMsgNsTestComponent);
exports.Ng2BalloonMsgNsTestComponent = Ng2BalloonMsgNsTestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWJhbGxvb24tbXNnLW5zLXRlc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmcyLWJhbGxvb24tbXNnLW5zLXRlc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBd0M7QUFDeEMsK0ZBSTZEO0FBTzdELElBQWEsNEJBQTRCO0lBRXJDLHNDQUFvQixVQUFnQztRQUFoQyxlQUFVLEdBQVYsVUFBVSxDQUFzQjtJQUNwRCxDQUFDO0lBRUQsa0RBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELCtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxrREFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsZ0RBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELHlEQUFrQixHQUFsQjtRQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUMvQiw0QkFBNEIsRUFDNUIscUNBQVcsQ0FBQyxPQUFPLEVBQ25CLG9DQUFVLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFdBQVcsRUFBRSxZQUFZO1NBQzVCLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCw2REFBc0IsR0FBdEI7UUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FDL0IsaUNBQWlDLEVBQ2pDLHFDQUFXLENBQUMsS0FBSyxFQUNqQixvQ0FBVSxDQUFDLGFBQWEsRUFBRTtZQUN0QixXQUFXLEVBQUUsWUFBWTtZQUN6QixVQUFVLEVBQUUsV0FBVztZQUN2QixXQUFXLEVBQUUsZUFBZTtTQUUvQixDQUNKLENBQUM7UUFFRixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0RBQWtELENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTCxtQ0FBQztBQUFELENBQUMsQUEvQ0QsSUErQ0M7QUEvQ1ksNEJBQTRCO0lBTHhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLFdBQVcsRUFBRSx3Q0FBd0M7UUFDckQsUUFBUSxFQUFDLE1BQU0sQ0FBQyxFQUFFO0tBQ3JCLENBQUM7cUNBR2tDLDhDQUFvQjtHQUYzQyw0QkFBNEIsQ0ErQ3hDO0FBL0NZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgICBOZzJCYWxsb29uTXNnU2VydmljZSxcbiAgICBVc3JNc2dMZXZlbCxcbiAgICBVc3JNc2dUeXBlXG59IGZyb20gXCIuLi9uZzItYmFsbG9vbi1tc2cvc2VydmljZXMvbmcyLWJhbGxvb24tbXNnLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZzItYmFsbG9vbi1tc2ctbnMtdGVzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICduZzItYmFsbG9vbi1tc2ctbnMtdGVzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgbW9kdWxlSWQ6bW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIE5nMkJhbGxvb25Nc2dOc1Rlc3RDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtc2dTZXJ2aWNlOiBOZzJCYWxsb29uTXNnU2VydmljZSkge1xuICAgIH1cblxuICAgIHNob3dTdWNjZXNzKCkge1xuICAgICAgICB0aGlzLm1zZ1NlcnZpY2Uuc2hvd1N1Y2Nlc3MoXCJUaGlzIGlzIGEgdGVzdCBTVUNDRVNTXCIpO1xuICAgIH1cblxuICAgIHNob3dJbmZvKCkge1xuICAgICAgICB0aGlzLm1zZ1NlcnZpY2Uuc2hvd0luZm8oXCJUaGlzIGlzIGEgdGVzdCBpbmZvXCIpO1xuICAgIH1cblxuICAgIHNob3dXYXJuaW5nKCkge1xuICAgICAgICB0aGlzLm1zZ1NlcnZpY2Uuc2hvd1dhcm5pbmcoXCJUaGlzIGlzIGEgdGVzdCB3YXJuaW5nXCIpO1xuICAgIH1cblxuICAgIHNob3dFcnJvcigpIHtcbiAgICAgICAgdGhpcy5tc2dTZXJ2aWNlLnNob3dFcnJvcihcIlRoaXMgaXMgYSB0ZXN0IGVycm9yLiBDbGljayB0byBkaXNtaXNzXCIpO1xuICAgIH1cblxuICAgIHNob3dTdWNjZXNzQ29uZmlybSgpIHtcbiAgICAgICAgbGV0IHAgPSB0aGlzLm1zZ1NlcnZpY2Uuc2hvd01lc3NhZ2UoXG4gICAgICAgICAgICBcIlRoaXMgaXMgYSBzdWNjZXNzIGNvbmZpcm0uXCIsXG4gICAgICAgICAgICBVc3JNc2dMZXZlbC5TdWNjZXNzLFxuICAgICAgICAgICAgVXNyTXNnVHlwZS5Db25maXJtLCB7XG4gICAgICAgICAgICAgICAgY29uZmlybVRleHQ6IFwiT0sgQ29uZmlybVwiXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3JDb25maXJtQ2FuY2VsKCkge1xuICAgICAgICBsZXQgcCA9IHRoaXMubXNnU2VydmljZS5zaG93TWVzc2FnZShcbiAgICAgICAgICAgIFwiVGhpcyBpcyBhIEVycm9yIENvbmZpcm0gQ2FuY2VsLlwiLFxuICAgICAgICAgICAgVXNyTXNnTGV2ZWwuRXJyb3IsXG4gICAgICAgICAgICBVc3JNc2dUeXBlLkNvbmZpcm1DYW5jZWwsIHtcbiAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogXCJPSyBDb25maXJtXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsVGV4dDogXCJDYW5jZWwgeHhcIixcbiAgICAgICAgICAgICAgICBkaWFsb2dUaXRsZTogXCJBd2Vzb21lIHRpdGxlXCJcblxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSWdub3JpbmcgcmVqZWN0IGNhbGwgZnJvbSBwcm9taXNlIGZvciB0aGlzIHRlc3QuXCIpO1xuICAgICAgICB9KVxuICAgIH1cblxufVxuIl19