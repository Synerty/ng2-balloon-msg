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
        // in ms, Additional time to show the message for if it has a route
        this.withRouteDuration = 2000;
    }
    Ng2BalloonMsgCommonItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        var expireDuration = this.msgDetails.hasRoute()
            ? this.expireDuration + this.withRouteDuration
            : this.expireDuration;
        var showDuration = this.msgDetails.hasRoute()
            ? this.showDuration + this.withRouteDuration
            : this.showDuration;
        // Hide the message after a certain period.
        if (this.msgDetails.isFleeting()) {
            setTimeout(function () {
                _this.shown = false;
                _this.shownStr = "hidden";
            }, showDuration);
            setTimeout(function () {
                _this.msgDetails.expired = true;
            }, expireDuration);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWJhbGxvb24tbXNnLWNvbW1vbi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nMi1iYWxsb29uLW1zZy1jb21tb24taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUE0QztBQUU1QywrRUFBa0U7QUFHbEU7SUFxQkksMENBQXNCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBaEJwQyxVQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGFBQVEsR0FBVyxPQUFPLENBQUM7UUFFM0IseURBQXlEO1FBQ3RDLHNCQUFpQixHQUFHLEdBQUcsQ0FBQztRQUUzQywrQ0FBK0M7UUFDNUIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFdkMsc0RBQXNEO1FBQ25DLG1CQUFjLEdBQUcsSUFBSSxDQUFDLENBQUMsa0NBQWtDO1FBRTVFLG1FQUFtRTtRQUNoRCxzQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFLNUMsQ0FBQztJQUVELG1EQUFRLEdBQVI7UUFBQSxpQkFxQkM7UUFwQkcsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Y0FDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCO2NBQzVDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFMUIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Y0FDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCO2NBQzFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFFeEIsMkNBQTJDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLFVBQVUsQ0FBQztnQkFDUCxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDN0IsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBRWpCLFVBQVUsQ0FBQztnQkFDUCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDbkMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7SUFFTCxDQUFDO0lBRUQscURBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsc0RBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQseURBQWMsR0FBZDtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsNENBQTRDO1FBQzVDLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBRW5CLDJCQUEyQjtZQUMzQixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMzQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUUxRCxDQUFDLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCx3REFBYSxHQUFiO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUMvQixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTCx1Q0FBQztBQUFELENBQUMsQUFqRkQsSUFpRkM7QUE5RUc7SUFEQyxZQUFLLEVBQUU7OEJBQ0ksdUNBQWE7b0VBQUM7QUFIakIsNEVBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbnB1dCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VXNyTXNnRGV0YWlsc30gZnJvbSBcIi4uL3NlcnZpY2VzL25nMi1iYWxsb29uLW1zZy5zZXJ2aWNlXCI7XG5cblxuZXhwb3J0IGNsYXNzIE5nMkJhbGxvb25Nc2dDb21tb25JdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpXG4gICAgbXNnRGV0YWlsczogVXNyTXNnRGV0YWlscztcblxuICAgIHNob3duOiBib29sZWFuID0gdHJ1ZTtcbiAgICBzaG93blN0cjogc3RyaW5nID0gXCJzaG93blwiO1xuXG4gICAgLy8gaW4gbXMsIFRoZSB0aW1lIGl0IHRha2VzIGZvciBjaGFuZ2Ugb2YgYW5pbWF0aW9uIHN0YXRlXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGFuaW1hdGlvbkR1cmF0aW9uID0gNTAwO1xuXG4gICAgLy8gaW4gbXMsIFRoZSB0aW1lIGl0IHRha2VzIGJlZm9yZSBpdCBmYWRlcyBvdXRcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc2hvd0R1cmF0aW9uID0gMjAwMDtcblxuICAgIC8vIGluIG1zLCBUaGUgdGltZSB0byB3YWl0IGJlZm9yZSBleHBpcmluZyB0aGUgbWVzc2FnZVxuICAgIHByb3RlY3RlZCByZWFkb25seSBleHBpcmVEdXJhdGlvbiA9IDMwMDA7IC8vIHNob3dEdXJhdGlvbiArIGZhZGUgaW4vb3V0IHRpbWVcblxuICAgIC8vIGluIG1zLCBBZGRpdGlvbmFsIHRpbWUgdG8gc2hvdyB0aGUgbWVzc2FnZSBmb3IgaWYgaXQgaGFzIGEgcm91dGVcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgd2l0aFJvdXRlRHVyYXRpb24gPSAyMDAwO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBsZXQgZXhwaXJlRHVyYXRpb24gPSB0aGlzLm1zZ0RldGFpbHMuaGFzUm91dGUoKVxuICAgICAgICAgICAgPyB0aGlzLmV4cGlyZUR1cmF0aW9uICsgdGhpcy53aXRoUm91dGVEdXJhdGlvblxuICAgICAgICAgICAgOiB0aGlzLmV4cGlyZUR1cmF0aW9uO1xuXG4gICAgICAgIGxldCBzaG93RHVyYXRpb24gPSB0aGlzLm1zZ0RldGFpbHMuaGFzUm91dGUoKVxuICAgICAgICAgICAgPyB0aGlzLnNob3dEdXJhdGlvbiArIHRoaXMud2l0aFJvdXRlRHVyYXRpb25cbiAgICAgICAgICAgIDogdGhpcy5zaG93RHVyYXRpb247XG5cbiAgICAgICAgLy8gSGlkZSB0aGUgbWVzc2FnZSBhZnRlciBhIGNlcnRhaW4gcGVyaW9kLlxuICAgICAgICBpZiAodGhpcy5tc2dEZXRhaWxzLmlzRmxlZXRpbmcoKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd25TdHIgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgfSwgc2hvd0R1cmF0aW9uKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tc2dEZXRhaWxzLmV4cGlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSwgZXhwaXJlRHVyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBtc2dDbGlja2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1zZ0RldGFpbHMuZXhwaXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb3BlbkNsaWNrZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubXNnRGV0YWlscy5leHBpcmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMubXNnRGV0YWlscy5yb3V0ZVBhdGhdKTtcbiAgICB9XG5cbiAgICBjb25maXJtQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93blN0ciA9IFwiaGlkZGVuXCI7XG4gICAgICAgIC8vIEFkZCAxMDBtcyB0byBhbGxvdyBhbmltYXRpb25zIHRvIGNvbXBsZXRlXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tc2dEZXRhaWxzLnJlc29sdmUoKTtcbiAgICAgICAgICAgIHRoaXMubXNnRGV0YWlscy5leHBpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd24gPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gUm91dGUgd2hlbiB0aGV5IGNsaWNrIG9rXG4gICAgICAgICAgICBpZiAodGhpcy5tc2dEZXRhaWxzLmhhc1JvdXRlKCkpXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMubXNnRGV0YWlscy5yb3V0ZVBhdGhdKTtcblxuICAgICAgICB9LCB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uICsgMTAwKTtcbiAgICB9XG5cbiAgICBjYW5jZWxDbGlja2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNob3duU3RyID0gXCJoaWRkZW5cIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1zZ0RldGFpbHMucmVqZWN0KCk7XG4gICAgICAgICAgICB0aGlzLm1zZ0RldGFpbHMuZXhwaXJlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNob3duID0gZmFsc2U7XG4gICAgICAgIH0sIHRoaXMuYW5pbWF0aW9uRHVyYXRpb24gKyAxMDApO1xuICAgIH1cblxufVxuIl19