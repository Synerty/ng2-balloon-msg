"use strict";
var core_1 = require("@angular/core");
var ng2_balloon_msg_service_1 = require("../services/ng2-balloon-msg.service");
var Ng2BalloonMsgCommonItemComponent = (function () {
    function Ng2BalloonMsgCommonItemComponent(router) {
        this.router = router;
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
    Ng2BalloonMsgCommonItemComponent.prototype.openClicked = function () {
        this.msgDetails.expired = true;
        this.router.navigate([this.msgDetails.routePath]);
    };
    Ng2BalloonMsgCommonItemComponent.prototype.confirmClicked = function () {
        var _this = this;
        this.shownStr = "hidden";
        // Add 100ms to allow animations to complete
        setTimeout(function () {
            _this.msgDetails.resolve();
            _this.msgDetails.expired = true;
            _this.shown = false;
            // Route when they click ok
            if (_this.msgDetails.hasRoute())
                _this.router.navigate([_this.msgDetails.routePath]);
        }, this.animationDuration + 100);
    };
    Ng2BalloonMsgCommonItemComponent.prototype.cancelClicked = function () {
        var _this = this;
        this.shownStr = "hidden";
        setTimeout(function () {
            _this.msgDetails.reject();
            _this.msgDetails.expired = true;
            _this.shown = false;
        }, this.animationDuration + 100);
    };
    return Ng2BalloonMsgCommonItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", ng2_balloon_msg_service_1.UsrMsgDetails)
], Ng2BalloonMsgCommonItemComponent.prototype, "msgDetails", void 0);
exports.Ng2BalloonMsgCommonItemComponent = Ng2BalloonMsgCommonItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWJhbGxvb24tbXNnLWNvbW1vbi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nMi1iYWxsb29uLW1zZy1jb21tb24taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUE0QztBQUU1QywrRUFBa0U7QUFHbEU7SUFrQkksMENBQXNCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBYnBDLFVBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsYUFBUSxHQUFXLE9BQU8sQ0FBQztRQUUzQix5REFBeUQ7UUFDdEMsc0JBQWlCLEdBQUcsR0FBRyxDQUFDO1FBRTNDLCtDQUErQztRQUM1QixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUV2QyxzREFBc0Q7UUFDbkMsbUJBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQyxrQ0FBa0M7SUFLNUUsQ0FBQztJQUVELG1EQUFRLEdBQVI7UUFBQSxpQkFXQztRQVRHLDJDQUEyQztRQUMzQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixVQUFVLENBQUM7Z0JBQ1AsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQzdCLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdEIsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQTlCLENBQThCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFFLENBQUM7SUFFTCxDQUFDO0lBRUQscURBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsc0RBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQseURBQWMsR0FBZDtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsNENBQTRDO1FBQzVDLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBRW5CLDJCQUEyQjtZQUMzQixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMzQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUUxRCxDQUFDLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCx3REFBYSxHQUFiO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUMvQixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTCx1Q0FBQztBQUFELENBQUMsQUFwRUQsSUFvRUM7QUFqRUc7SUFEQyxZQUFLLEVBQUU7OEJBQ0ksdUNBQWE7b0VBQUM7QUFIakIsNEVBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbnB1dCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VXNyTXNnRGV0YWlsc30gZnJvbSBcIi4uL3NlcnZpY2VzL25nMi1iYWxsb29uLW1zZy5zZXJ2aWNlXCI7XG5cblxuZXhwb3J0IGNsYXNzIE5nMkJhbGxvb25Nc2dDb21tb25JdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpXG4gICAgbXNnRGV0YWlsczogVXNyTXNnRGV0YWlscztcblxuICAgIHNob3duOiBib29sZWFuID0gdHJ1ZTtcbiAgICBzaG93blN0cjogc3RyaW5nID0gXCJzaG93blwiO1xuXG4gICAgLy8gaW4gbXMsIFRoZSB0aW1lIGl0IHRha2VzIGZvciBjaGFuZ2Ugb2YgYW5pbWF0aW9uIHN0YXRlXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGFuaW1hdGlvbkR1cmF0aW9uID0gNTAwO1xuXG4gICAgLy8gaW4gbXMsIFRoZSB0aW1lIGl0IHRha2VzIGJlZm9yZSBpdCBmYWRlcyBvdXRcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc2hvd0R1cmF0aW9uID0gMjAwMDtcblxuICAgIC8vIGluIG1zLCBUaGUgdGltZSB0byB3YWl0IGJlZm9yZSBleHBpcmluZyB0aGUgbWVzc2FnZVxuICAgIHByb3RlY3RlZCByZWFkb25seSBleHBpcmVEdXJhdGlvbiA9IDMwMDA7IC8vIHNob3dEdXJhdGlvbiArIGZhZGUgaW4vb3V0IHRpbWVcblxuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJvdXRlcjogUm91dGVyKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICAvLyBIaWRlIHRoZSBtZXNzYWdlIGFmdGVyIGEgY2VydGFpbiBwZXJpb2QuXG4gICAgICAgIGlmICh0aGlzLm1zZ0RldGFpbHMuaXNGbGVldGluZygpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93blN0ciA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICB9LCB0aGlzLnNob3dEdXJhdGlvbik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubXNnRGV0YWlscy5leHBpcmVkID0gdHJ1ZSwgdGhpcy5leHBpcmVEdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG1zZ0NsaWNrZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubXNnRGV0YWlscy5leHBpcmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvcGVuQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tc2dEZXRhaWxzLmV4cGlyZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5tc2dEZXRhaWxzLnJvdXRlUGF0aF0pO1xuICAgIH1cblxuICAgIGNvbmZpcm1DbGlja2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNob3duU3RyID0gXCJoaWRkZW5cIjtcbiAgICAgICAgLy8gQWRkIDEwMG1zIHRvIGFsbG93IGFuaW1hdGlvbnMgdG8gY29tcGxldGVcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1zZ0RldGFpbHMucmVzb2x2ZSgpO1xuICAgICAgICAgICAgdGhpcy5tc2dEZXRhaWxzLmV4cGlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zaG93biA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBSb3V0ZSB3aGVuIHRoZXkgY2xpY2sgb2tcbiAgICAgICAgICAgIGlmICh0aGlzLm1zZ0RldGFpbHMuaGFzUm91dGUoKSlcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5tc2dEZXRhaWxzLnJvdXRlUGF0aF0pO1xuXG4gICAgICAgIH0sIHRoaXMuYW5pbWF0aW9uRHVyYXRpb24gKyAxMDApO1xuICAgIH1cblxuICAgIGNhbmNlbENsaWNrZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2hvd25TdHIgPSBcImhpZGRlblwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubXNnRGV0YWlscy5yZWplY3QoKTtcbiAgICAgICAgICAgIHRoaXMubXNnRGV0YWlscy5leHBpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd24gPSBmYWxzZTtcbiAgICAgICAgfSwgdGhpcy5hbmltYXRpb25EdXJhdGlvbiArIDEwMCk7XG4gICAgfVxuXG59XG4iXX0=