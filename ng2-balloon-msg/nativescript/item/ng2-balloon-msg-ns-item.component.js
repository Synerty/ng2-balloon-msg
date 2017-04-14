"use strict";
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var ng2_balloon_msg_common_item_component_1 = require("../../common/ng2-balloon-msg-common-item.component");
var Ng2BalloonMsgNsItemComponent = (function (_super) {
    __extends(Ng2BalloonMsgNsItemComponent, _super);
    function Ng2BalloonMsgNsItemComponent() {
        return _super.call(this) || this;
    }
    return Ng2BalloonMsgNsItemComponent;
}(ng2_balloon_msg_common_item_component_1.Ng2BalloonMsgCommonItemComponent));
Ng2BalloonMsgNsItemComponent = __decorate([
    core_1.Component({
        selector: 'ng2-balloon-msg-item-ns',
        templateUrl: './ng2-balloon-msg-ns-item.component.html',
        animations: [
            core_2.trigger('visibilityChanged', [
                core_2.state("shown", core_2.style({
                    opacity: 1,
                    transform: 'scale(2)'
                })),
                core_2.state("hidden", core_2.style({
                    opacity: 0,
                    transform: 'scale(1)'
                })),
                core_2.transition('* => *', core_2.animate('500ms'))
            ])
        ],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [])
], Ng2BalloonMsgNsItemComponent);
exports.Ng2BalloonMsgNsItemComponent = Ng2BalloonMsgNsItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWJhbGxvb24tbXNnLW5zLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmcyLWJhbGxvb24tbXNnLW5zLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBd0M7QUFDeEMsc0NBQXlFO0FBQ3pFLDRHQUFvRztBQXlCcEcsSUFBYSw0QkFBNEI7SUFBUyxnREFBZ0M7SUFFOUU7ZUFDSSxpQkFBTztJQUVYLENBQUM7SUFHTCxtQ0FBQztBQUFELENBQUMsQUFSRCxDQUFrRCx3RUFBZ0MsR0FRakY7QUFSWSw0QkFBNEI7SUF0QnhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLFdBQVcsRUFBRSwwQ0FBMEM7UUFDdkQsVUFBVSxFQUFFO1lBQ1IsY0FBTyxDQUFDLG1CQUFtQixFQUFFO2dCQUN6QixZQUFLLENBQUMsT0FBTyxFQUNULFlBQUssQ0FBQztvQkFDRixPQUFPLEVBQUUsQ0FBQztvQkFDVixTQUFTLEVBQUUsVUFBVTtpQkFDeEIsQ0FBQyxDQUNMO2dCQUNELFlBQUssQ0FBQyxRQUFRLEVBQ1YsWUFBSyxDQUFDO29CQUNGLE9BQU8sRUFBRSxDQUFDO29CQUNWLFNBQVMsRUFBRSxVQUFVO2lCQUN4QixDQUFDLENBQ0w7Z0JBQ0QsaUJBQVUsQ0FBQyxRQUFRLEVBQUUsY0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3pDLENBQUM7U0FDTDtRQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtLQUN0QixDQUFDOztHQUNXLDRCQUE0QixDQVF4QztBQVJZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHthbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge05nMkJhbGxvb25Nc2dDb21tb25JdGVtQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vY29tbW9uL25nMi1iYWxsb29uLW1zZy1jb21tb24taXRlbS5jb21wb25lbnRcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi1iYWxsb29uLW1zZy1pdGVtLW5zJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmcyLWJhbGxvb24tbXNnLW5zLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcigndmlzaWJpbGl0eUNoYW5nZWQnLCBbXG4gICAgICAgICAgICBzdGF0ZShcInNob3duXCIsXG4gICAgICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgyKSdcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzdGF0ZShcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiAqJywgYW5pbWF0ZSgnNTAwbXMnKSlcbiAgICAgICAgXSlcbiAgICBdLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgTmcyQmFsbG9vbk1zZ05zSXRlbUNvbXBvbmVudCBleHRlbmRzIE5nMkJhbGxvb25Nc2dDb21tb25JdGVtQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgfVxuXG5cbn1cbiJdfQ==