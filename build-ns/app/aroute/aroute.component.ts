import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'ng2-balloon-msg-ns-test',
    templateUrl: './aroute.component.html',
    moduleId: module.id
})
export class ArouteComponent {

    constructor(private router: Router) {
    }

    homeClicked() {
        this.router.navigate(['/']);
    }


}
