"use strict";
var core_1 = require("@angular/core");
var ng2_balloon_msg_service_1 = require("../services/ng2-balloon-msg.service");
var Ng2BalloonMsgCommonItemComponent = (function () {
    function Ng2BalloonMsgCommonItemComponent() {
        this.shown = true;
        // in ms, The time it takes before it fades out
        this.showDuration = 2000;
        // in ms, The time to wait before expiring the message
        this.expireDuration = 3000; // showDuration + fade in/out time
    }
    Ng2BalloonMsgCommonItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Hide the message after a certain period.
        if (this.msgDetails.isFleeting()) {
            setTimeout(function () { return _this.shown = false; }, this.showDuration);
            setTimeout(function () { return _this.msgDetails.expired = true; }, this.expireDuration);
        }
    };
    Ng2BalloonMsgCommonItemComponent.prototype.msgClicked = function () {
        this.msgDetails.expired = true;
    };
    Ng2BalloonMsgCommonItemComponent.prototype.confirmClicked = function () {
        this.msgDetails.resolve();
        this.msgDetails.expired = true;
        this.shown = false;
    };
    Ng2BalloonMsgCommonItemComponent.prototype.cancelClicked = function () {
        this.msgDetails.reject();
        this.msgDetails.expired = true;
        this.shown = false;
    };
    return Ng2BalloonMsgCommonItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", ng2_balloon_msg_service_1.UsrMsgDetails)
], Ng2BalloonMsgCommonItemComponent.prototype, "msgDetails", void 0);
exports.Ng2BalloonMsgCommonItemComponent = Ng2BalloonMsgCommonItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWJhbGxvb24tbXNnLWNvbW1vbi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nMi1iYWxsb29uLW1zZy1jb21tb24taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUE0QztBQUM1QywrRUFBa0U7QUFHbEU7SUFjSTtRQVRBLFVBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsK0NBQStDO1FBQzVCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXZDLHNEQUFzRDtRQUNuQyxtQkFBYyxHQUFHLElBQUksQ0FBQyxDQUFDLGtDQUFrQztJQUs1RSxDQUFDO0lBRUQsbURBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsMkNBQTJDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hELFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUE5QixDQUE4QixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMxRSxDQUFDO0lBRUwsQ0FBQztJQUVELHFEQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELHlEQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsd0RBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFTCx1Q0FBQztBQUFELENBQUMsQUEzQ0QsSUEyQ0M7QUF4Q0c7SUFEQyxZQUFLLEVBQUU7OEJBQ0ksdUNBQWE7b0VBQUM7QUFIakIsNEVBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbnB1dCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtVc3JNc2dEZXRhaWxzfSBmcm9tIFwiLi4vc2VydmljZXMvbmcyLWJhbGxvb24tbXNnLnNlcnZpY2VcIjtcblxuXG5leHBvcnQgY2xhc3MgTmcyQmFsbG9vbk1zZ0NvbW1vbkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KClcbiAgICBtc2dEZXRhaWxzOiBVc3JNc2dEZXRhaWxzO1xuXG4gICAgc2hvd246IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLy8gaW4gbXMsIFRoZSB0aW1lIGl0IHRha2VzIGJlZm9yZSBpdCBmYWRlcyBvdXRcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc2hvd0R1cmF0aW9uID0gMjAwMDtcblxuICAgIC8vIGluIG1zLCBUaGUgdGltZSB0byB3YWl0IGJlZm9yZSBleHBpcmluZyB0aGUgbWVzc2FnZVxuICAgIHByb3RlY3RlZCByZWFkb25seSBleHBpcmVEdXJhdGlvbiA9IDMwMDA7IC8vIHNob3dEdXJhdGlvbiArIGZhZGUgaW4vb3V0IHRpbWVcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gSGlkZSB0aGUgbWVzc2FnZSBhZnRlciBhIGNlcnRhaW4gcGVyaW9kLlxuICAgICAgICBpZiAodGhpcy5tc2dEZXRhaWxzLmlzRmxlZXRpbmcoKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNob3duID0gZmFsc2UsIHRoaXMuc2hvd0R1cmF0aW9uKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5tc2dEZXRhaWxzLmV4cGlyZWQgPSB0cnVlLCB0aGlzLmV4cGlyZUR1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbXNnQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tc2dEZXRhaWxzLmV4cGlyZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbmZpcm1DbGlja2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1zZ0RldGFpbHMucmVzb2x2ZSgpO1xuICAgICAgICB0aGlzLm1zZ0RldGFpbHMuZXhwaXJlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd24gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjYW5jZWxDbGlja2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1zZ0RldGFpbHMucmVqZWN0KCk7XG4gICAgICAgIHRoaXMubXNnRGV0YWlscy5leHBpcmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93biA9IGZhbHNlO1xuICAgIH1cblxufVxuIl19