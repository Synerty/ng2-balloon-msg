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
        this.msgService.showInfo("This is a test info with route", "/aroute");
    };
    Ng2BalloonMsgNsTestComponent.prototype.showWarning = function () {
        this.msgService.showWarning("This is a test warning");
    };
    Ng2BalloonMsgNsTestComponent.prototype.showError = function () {
        this.msgService.showError("This is a test error. Click to dismiss");
    };
    Ng2BalloonMsgNsTestComponent.prototype.showWarningConfirmWithRoute = function () {
        var p = this.msgService.showMessage("This is a Warning confirm with route.", ng2_balloon_msg_service_1.UsrMsgLevel.Warning, ng2_balloon_msg_service_1.UsrMsgType.Confirm, {
            confirmText: "OK Confirm",
            routePath: '/aroute'
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWJhbGxvb24tbXNnLW5zLXRlc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmcyLWJhbGxvb24tbXNnLW5zLXRlc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBd0M7QUFDeEMsK0ZBSTZEO0FBTzdELElBQWEsNEJBQTRCO0lBRXJDLHNDQUFvQixVQUFnQztRQUFoQyxlQUFVLEdBQVYsVUFBVSxDQUFzQjtJQUNwRCxDQUFDO0lBRUQsa0RBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELCtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxnQ0FBZ0MsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsa0RBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELGdEQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxrRUFBMkIsR0FBM0I7UUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FDL0IsdUNBQXVDLEVBQ3ZDLHFDQUFXLENBQUMsT0FBTyxFQUNuQixvQ0FBVSxDQUFDLE9BQU8sRUFBRTtZQUNoQixXQUFXLEVBQUUsWUFBWTtZQUN6QixTQUFTLEVBQUUsU0FBUztTQUN2QixDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQseURBQWtCLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQy9CLDRCQUE0QixFQUM1QixxQ0FBVyxDQUFDLE9BQU8sRUFDbkIsb0NBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDaEIsV0FBVyxFQUFFLFlBQVk7U0FDNUIsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDZEQUFzQixHQUF0QjtRQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUMvQixpQ0FBaUMsRUFDakMscUNBQVcsQ0FBQyxLQUFLLEVBQ2pCLG9DQUFVLENBQUMsYUFBYSxFQUFFO1lBQ3RCLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLFdBQVcsRUFBRSxlQUFlO1NBRS9CLENBQ0osQ0FBQztRQUVGLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVMLG1DQUFDO0FBQUQsQ0FBQyxBQXpERCxJQXlEQztBQXpEWSw0QkFBNEI7SUFMeEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsV0FBVyxFQUFFLHdDQUF3QztRQUNyRCxRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7S0FDckIsQ0FBQztxQ0FHa0MsOENBQW9CO0dBRjNDLDRCQUE0QixDQXlEeEM7QUF6RFksb0VBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICAgIE5nMkJhbGxvb25Nc2dTZXJ2aWNlLFxuICAgIFVzck1zZ0xldmVsLFxuICAgIFVzck1zZ1R5cGVcbn0gZnJvbSBcIi4uL25nMi1iYWxsb29uLW1zZy9zZXJ2aWNlcy9uZzItYmFsbG9vbi1tc2cuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi1iYWxsb29uLW1zZy1ucy10ZXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ25nMi1iYWxsb29uLW1zZy1ucy10ZXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBtb2R1bGVJZDptb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgTmcyQmFsbG9vbk1zZ05zVGVzdENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1zZ1NlcnZpY2U6IE5nMkJhbGxvb25Nc2dTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgc2hvd1N1Y2Nlc3MoKSB7XG4gICAgICAgIHRoaXMubXNnU2VydmljZS5zaG93U3VjY2VzcyhcIlRoaXMgaXMgYSB0ZXN0IFNVQ0NFU1NcIik7XG4gICAgfVxuXG4gICAgc2hvd0luZm8oKSB7XG4gICAgICAgIHRoaXMubXNnU2VydmljZS5zaG93SW5mbyhcIlRoaXMgaXMgYSB0ZXN0IGluZm8gd2l0aCByb3V0ZVwiLCBcIi9hcm91dGVcIik7XG4gICAgfVxuXG4gICAgc2hvd1dhcm5pbmcoKSB7XG4gICAgICAgIHRoaXMubXNnU2VydmljZS5zaG93V2FybmluZyhcIlRoaXMgaXMgYSB0ZXN0IHdhcm5pbmdcIik7XG4gICAgfVxuXG4gICAgc2hvd0Vycm9yKCkge1xuICAgICAgICB0aGlzLm1zZ1NlcnZpY2Uuc2hvd0Vycm9yKFwiVGhpcyBpcyBhIHRlc3QgZXJyb3IuIENsaWNrIHRvIGRpc21pc3NcIik7XG4gICAgfVxuXG4gICAgc2hvd1dhcm5pbmdDb25maXJtV2l0aFJvdXRlKCkge1xuICAgICAgICBsZXQgcCA9IHRoaXMubXNnU2VydmljZS5zaG93TWVzc2FnZShcbiAgICAgICAgICAgIFwiVGhpcyBpcyBhIFdhcm5pbmcgY29uZmlybSB3aXRoIHJvdXRlLlwiLFxuICAgICAgICAgICAgVXNyTXNnTGV2ZWwuV2FybmluZyxcbiAgICAgICAgICAgIFVzck1zZ1R5cGUuQ29uZmlybSwge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiBcIk9LIENvbmZpcm1cIixcbiAgICAgICAgICAgICAgICByb3V0ZVBhdGg6ICcvYXJvdXRlJ1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1N1Y2Nlc3NDb25maXJtKCkge1xuICAgICAgICBsZXQgcCA9IHRoaXMubXNnU2VydmljZS5zaG93TWVzc2FnZShcbiAgICAgICAgICAgIFwiVGhpcyBpcyBhIHN1Y2Nlc3MgY29uZmlybS5cIixcbiAgICAgICAgICAgIFVzck1zZ0xldmVsLlN1Y2Nlc3MsXG4gICAgICAgICAgICBVc3JNc2dUeXBlLkNvbmZpcm0sIHtcbiAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogXCJPSyBDb25maXJtXCJcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dFcnJvckNvbmZpcm1DYW5jZWwoKSB7XG4gICAgICAgIGxldCBwID0gdGhpcy5tc2dTZXJ2aWNlLnNob3dNZXNzYWdlKFxuICAgICAgICAgICAgXCJUaGlzIGlzIGEgRXJyb3IgQ29uZmlybSBDYW5jZWwuXCIsXG4gICAgICAgICAgICBVc3JNc2dMZXZlbC5FcnJvcixcbiAgICAgICAgICAgIFVzck1zZ1R5cGUuQ29uZmlybUNhbmNlbCwge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiBcIk9LIENvbmZpcm1cIixcbiAgICAgICAgICAgICAgICBjYW5jZWxUZXh0OiBcIkNhbmNlbCB4eFwiLFxuICAgICAgICAgICAgICAgIGRpYWxvZ1RpdGxlOiBcIkF3ZXNvbWUgdGl0bGVcIlxuXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJZ25vcmluZyByZWplY3QgY2FsbCBmcm9tIHByb21pc2UgZm9yIHRoaXMgdGVzdC5cIik7XG4gICAgICAgIH0pXG4gICAgfVxuXG59XG4iXX0=