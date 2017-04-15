"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ArouteComponent = (function () {
    function ArouteComponent(router) {
        this.router = router;
    }
    ArouteComponent.prototype.homeClicked = function () {
        this.router.navigate(['/']);
    };
    return ArouteComponent;
}());
ArouteComponent = __decorate([
    core_1.Component({
        selector: 'ng2-balloon-msg-ns-test',
        templateUrl: './aroute.component.html',
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ArouteComponent);
exports.ArouteComponent = ArouteComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJvdXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFyb3V0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQUN4QywwQ0FBdUM7QUFPdkMsSUFBYSxlQUFlO0lBRXhCLHlCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNsQyxDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBR0wsc0JBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLGVBQWU7SUFMM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7S0FDdEIsQ0FBQztxQ0FHOEIsZUFBTTtHQUZ6QixlQUFlLENBVTNCO0FBVlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmcyLWJhbGxvb24tbXNnLW5zLXRlc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcm91dGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgQXJvdXRlQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB9XG5cbiAgICBob21lQ2xpY2tlZCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgIH1cblxuXG59XG4iXX0=