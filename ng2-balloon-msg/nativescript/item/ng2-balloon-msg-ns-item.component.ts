import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Ng2BalloonMsgCommonItemComponent} from "../../common/ng2-balloon-msg-common-item.component";


@Component({
    selector: 'ng2-balloon-msg-item-ns',
    templateUrl: './ng2-balloon-msg-ns-item.component.html',
    styleUrls: ['./ng2-balloon-msg-ns-item.component.css'],
    moduleId: module.id
})
export class Ng2BalloonMsgNsItemComponent extends Ng2BalloonMsgCommonItemComponent {

    constructor(protected router: Router) {
        super(router);
    }
}
