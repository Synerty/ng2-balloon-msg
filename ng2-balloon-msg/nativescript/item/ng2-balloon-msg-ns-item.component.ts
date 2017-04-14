import {Component} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/core";
import {Ng2BalloonMsgCommonItemComponent} from "../../common/ng2-balloon-msg-common-item.component";


@Component({
    selector: 'ng2-balloon-msg-item-ns',
    templateUrl: './ng2-balloon-msg-ns-item.component.html',
    animations: [
        trigger('visibilityChanged', [
            state("shown",
                style({
                    opacity: 1,
                    transform: 'scale(2)'
                }),
            ),
            state("hidden",
                style({
                    opacity: 0,
                    transform: 'scale(1)'
                }),
            ),
            transition('* => *', animate('500ms'))
        ])
    ],
    moduleId: module.id
})
export class Ng2BalloonMsgNsItemComponent extends Ng2BalloonMsgCommonItemComponent {

    constructor() {
        super();

    }


}
