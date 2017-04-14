"use strict";
var core_1 = require("@angular/core");
var ng2_balloon_msg_service_1 = require("../services/ng2-balloon-msg.service");
var Ng2BalloonMsgCommonItemComponent = (function () {
    function Ng2BalloonMsgCommonItemComponent() {
        this.shown = true;
        this.shownStr = "shown";
        // in ms, The time it takes for change of animation state
        this.animationDuration = 500;
        // in ms, The time it takes before it fades out
        this.showDuration = 2000;
        // in ms, The time to wait before expiring the message
        this.expireDuration = 3000; // showDuration + fade in/out time
    }
    Ng2BalloonMsgCommonItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Hide the message after a certain period.
        if (this.msgDetails.isFleeting()) {
            setTimeout(function () {
                _this.shown = false;
                _this.shownStr = "hidden";
            }, this.showDuration);
            setTimeout(function () { return _this.msgDetails.expired = true; }, this.expireDuration);
        }
    };
    Ng2BalloonMsgCommonItemComponent.prototype.msgClicked = function () {
        this.msgDetails.expired = true;
    };
    Ng2BalloonMsgCommonItemComponent.prototype.confirmClicked = function () {
        var _this = this;
        this.shownStr = "hidden";
        setTimeout(function () {
            _this.msgDetails.resolve();
            _this.msgDetails.expired = true;
            _this.shown = false;
        }, this.animationDuration);
    };
    Ng2BalloonMsgCommonItemComponent.prototype.cancelClicked = function () {
        var _this = this;
        this.shownStr = "hidden";
        setTimeout(function () {
            _this.msgDetails.reject();
            _this.msgDetails.expired = true;
            _this.shown = false;
        }, this.animationDuration);
    };
    return Ng2BalloonMsgCommonItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", ng2_balloon_msg_service_1.UsrMsgDetails)
], Ng2BalloonMsgCommonItemComponent.prototype, "msgDetails", void 0);
exports.Ng2BalloonMsgCommonItemComponent = Ng2BalloonMsgCommonItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWJhbGxvb24tbXNnLWNvbW1vbi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nMi1iYWxsb29uLW1zZy1jb21tb24taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUE0QztBQUM1QywrRUFBa0U7QUFHbEU7SUFrQkk7UUFiQSxVQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGFBQVEsR0FBVyxPQUFPLENBQUM7UUFFM0IseURBQXlEO1FBQ3RDLHNCQUFpQixHQUFHLEdBQUcsQ0FBQztRQUUzQywrQ0FBK0M7UUFDNUIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFdkMsc0RBQXNEO1FBQ25DLG1CQUFjLEdBQUcsSUFBSSxDQUFDLENBQUMsa0NBQWtDO0lBSzVFLENBQUM7SUFFRCxtREFBUSxHQUFSO1FBQUEsaUJBV0M7UUFURywyQ0FBMkM7UUFDM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsVUFBVSxDQUFDO2dCQUNQLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUM3QixDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3RCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUE5QixDQUE4QixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMxRSxDQUFDO0lBRUwsQ0FBQztJQUVELHFEQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELHlEQUFjLEdBQWQ7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsd0RBQWEsR0FBYjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN6QixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDL0IsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTCx1Q0FBQztBQUFELENBQUMsQUF6REQsSUF5REM7QUF0REc7SUFEQyxZQUFLLEVBQUU7OEJBQ0ksdUNBQWE7b0VBQUM7QUFIakIsNEVBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbnB1dCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtVc3JNc2dEZXRhaWxzfSBmcm9tIFwiLi4vc2VydmljZXMvbmcyLWJhbGxvb24tbXNnLnNlcnZpY2VcIjtcblxuXG5leHBvcnQgY2xhc3MgTmcyQmFsbG9vbk1zZ0NvbW1vbkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KClcbiAgICBtc2dEZXRhaWxzOiBVc3JNc2dEZXRhaWxzO1xuXG4gICAgc2hvd246IGJvb2xlYW4gPSB0cnVlO1xuICAgIHNob3duU3RyOiBzdHJpbmcgPSBcInNob3duXCI7XG5cbiAgICAvLyBpbiBtcywgVGhlIHRpbWUgaXQgdGFrZXMgZm9yIGNoYW5nZSBvZiBhbmltYXRpb24gc3RhdGVcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgYW5pbWF0aW9uRHVyYXRpb24gPSA1MDA7XG5cbiAgICAvLyBpbiBtcywgVGhlIHRpbWUgaXQgdGFrZXMgYmVmb3JlIGl0IGZhZGVzIG91dFxuICAgIHByb3RlY3RlZCByZWFkb25seSBzaG93RHVyYXRpb24gPSAyMDAwO1xuXG4gICAgLy8gaW4gbXMsIFRoZSB0aW1lIHRvIHdhaXQgYmVmb3JlIGV4cGlyaW5nIHRoZSBtZXNzYWdlXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGV4cGlyZUR1cmF0aW9uID0gMzAwMDsgLy8gc2hvd0R1cmF0aW9uICsgZmFkZSBpbi9vdXQgdGltZVxuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIC8vIEhpZGUgdGhlIG1lc3NhZ2UgYWZ0ZXIgYSBjZXJ0YWluIHBlcmlvZC5cbiAgICAgICAgaWYgKHRoaXMubXNnRGV0YWlscy5pc0ZsZWV0aW5nKCkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3duU3RyID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIH0sIHRoaXMuc2hvd0R1cmF0aW9uKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5tc2dEZXRhaWxzLmV4cGlyZWQgPSB0cnVlLCB0aGlzLmV4cGlyZUR1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbXNnQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tc2dEZXRhaWxzLmV4cGlyZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbmZpcm1DbGlja2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNob3duU3RyID0gXCJoaWRkZW5cIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1zZ0RldGFpbHMucmVzb2x2ZSgpO1xuICAgICAgICAgICAgdGhpcy5tc2dEZXRhaWxzLmV4cGlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zaG93biA9IGZhbHNlO1xuICAgICAgICB9LCB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICBjYW5jZWxDbGlja2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNob3duU3RyID0gXCJoaWRkZW5cIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1zZ0RldGFpbHMucmVqZWN0KCk7XG4gICAgICAgICAgICB0aGlzLm1zZ0RldGFpbHMuZXhwaXJlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNob3duID0gZmFsc2U7XG4gICAgICAgIH0sIHRoaXMuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgIH1cblxufVxuIl19