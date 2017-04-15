import {
    AfterViewInit,
    animate,
    Component,
    state,
    style,
    transition,
    trigger
} from "@angular/core";
import {Router} from "@angular/router";
import {Ng2BalloonMsgCommonItemComponent} from "../../common/ng2-balloon-msg-common-item.component";


@Component({
    selector: 'ng2-balloon-msg-item',
    templateUrl: './ng2-balloon-msg-web-item.component.html',
    animations: [
        trigger('msgPopup', [
            state("void",
                style({
                    opacity: 0,
                    transform: 'scale(2)'
                }),
            ),
            state("shown",
                style({
                    opacity: 1,
                    transform: 'scale(1)'
                }),
            ),
            state("hidden",
                style({
                    opacity: 0,
                    transform: 'scale(0)'
                }),
            ),
            transition('* => *', animate('500ms'))
        ]),
        trigger('msgDialog', [
            state("void",
                style({
                    opacity: 0,
                }),
            ),
            state("shown",
                style({
                    opacity: 1,
                }),
            ),
            state("hidden",
                style({
                    opacity: 0,
                }),
            ),
            transition('* => *', animate('500ms'))
        ])
    ],
})
export class Ng2BalloonMsgItemComponent extends Ng2BalloonMsgCommonItemComponent implements AfterViewInit {

    constructor(protected router: Router) {
        super(router);
    }

    ngAfterViewInit() {
        $('#ng2BalloonMsg' + this.msgDetails.msgId)["modal"]('show');
    }

}
