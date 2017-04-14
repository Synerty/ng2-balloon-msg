"use strict";
var Ng2BalloonMsgCommonQueueComponent = (function () {
    function Ng2BalloonMsgCommonQueueComponent(msgService) {
        this.msgService = msgService;
        // Max Queue Length, the number of messages to show in the screen
        this.maxQueueLength = 3;
        this.backlog = [];
        this._onScreen = [];
    }
    Ng2BalloonMsgCommonQueueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msgService.getObservable()
            .subscribe(function (msgDetails) { return _this.backlog.push(msgDetails); });
    };
    Ng2BalloonMsgCommonQueueComponent.prototype.getShown = function () {
        // First, remove all the shown messages that arn't shown
        this.backlog = this.backlog.filter(function (msgDetails) { return !msgDetails.expired; });
        // We can't just re-create the array otherwise angular2-dev complains that the
        // object has changed after a check
        // Remove the items from the array
        for (var i = this._onScreen.length - 1; i >= 0; i--) {
            if (this._onScreen[i].expired)
                this._onScreen.splice(i, 1);
        }
        // Now add three back
        while (this._onScreen.length < this.maxQueueLength && this.backlog.length) {
            // If we have one message, and it's a modal message, then break.
            // We only show one modal message at a time
            if (this._onScreen.length == 1 && this._onScreen[0].isModal())
                break;
            // If we already have messages
            // they won't be modal (because of the above check)
            // So if the next one is modal, then don't add it. We need to clear out
            // the other messages first.
            if (this._onScreen.length != 0 && this.backlog[0].isModal())
                break;
            this._onScreen.push(this.backlog.shift());
        }
        return this._onScreen;
    };
    return Ng2BalloonMsgCommonQueueComponent;
}());
exports.Ng2BalloonMsgCommonQueueComponent = Ng2BalloonMsgCommonQueueComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWJhbGxvb24tbXNnLWNvbW1vbi1xdWV1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzItYmFsbG9vbi1tc2ctY29tbW9uLXF1ZXVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUE7SUFRSSwyQ0FBc0IsVUFBZ0M7UUFBaEMsZUFBVSxHQUFWLFVBQVUsQ0FBc0I7UUFOdEQsaUVBQWlFO1FBQzlDLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBRXRDLFlBQU8sR0FBb0IsRUFBRSxDQUFDO1FBQ3BCLGNBQVMsR0FBb0IsRUFBRSxDQUFDO0lBSTFDLENBQUM7SUFFRCxvREFBUSxHQUFSO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTthQUMxQixTQUFTLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxvREFBUSxHQUFSO1FBQ0ksd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQW5CLENBQW1CLENBQUMsQ0FBQztRQUV0RSw4RUFBOEU7UUFDOUUsbUNBQW1DO1FBRW5DLGtDQUFrQztRQUNsQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2xELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUVELHFCQUFxQjtRQUNyQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN4RSxnRUFBZ0U7WUFDaEUsMkNBQTJDO1lBQzNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUMxRCxLQUFLLENBQUM7WUFFViw4QkFBOEI7WUFDOUIsbURBQW1EO1lBQ25ELHVFQUF1RTtZQUN2RSw0QkFBNEI7WUFDNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3hELEtBQUssQ0FBQztZQUVWLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQTtRQUM3QyxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUdMLHdDQUFDO0FBQUQsQ0FBQyxBQW5ERCxJQW1EQztBQW5EWSw4RUFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmcyQmFsbG9vbk1zZ1NlcnZpY2UsIFVzck1zZ0RldGFpbHN9IGZyb20gXCIuLi9zZXJ2aWNlcy9uZzItYmFsbG9vbi1tc2cuc2VydmljZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBOZzJCYWxsb29uTXNnQ29tbW9uUXVldWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgLy8gTWF4IFF1ZXVlIExlbmd0aCwgdGhlIG51bWJlciBvZiBtZXNzYWdlcyB0byBzaG93IGluIHRoZSBzY3JlZW5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbWF4UXVldWVMZW5ndGggPSAzO1xuXG4gICAgYmFja2xvZzogVXNyTXNnRGV0YWlsc1tdID0gW107XG4gICAgcHJvdGVjdGVkIF9vblNjcmVlbjogVXNyTXNnRGV0YWlsc1tdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbXNnU2VydmljZTogTmcyQmFsbG9vbk1zZ1NlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1zZ1NlcnZpY2UuZ2V0T2JzZXJ2YWJsZSgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKG1zZ0RldGFpbHMgPT4gdGhpcy5iYWNrbG9nLnB1c2gobXNnRGV0YWlscykpO1xuICAgIH1cblxuICAgIGdldFNob3duKCk6IFVzck1zZ0RldGFpbHNbXSB7XG4gICAgICAgIC8vIEZpcnN0LCByZW1vdmUgYWxsIHRoZSBzaG93biBtZXNzYWdlcyB0aGF0IGFybid0IHNob3duXG4gICAgICAgIHRoaXMuYmFja2xvZyA9IHRoaXMuYmFja2xvZy5maWx0ZXIobXNnRGV0YWlscyA9PiAhbXNnRGV0YWlscy5leHBpcmVkKTtcblxuICAgICAgICAvLyBXZSBjYW4ndCBqdXN0IHJlLWNyZWF0ZSB0aGUgYXJyYXkgb3RoZXJ3aXNlIGFuZ3VsYXIyLWRldiBjb21wbGFpbnMgdGhhdCB0aGVcbiAgICAgICAgLy8gb2JqZWN0IGhhcyBjaGFuZ2VkIGFmdGVyIGEgY2hlY2tcblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGl0ZW1zIGZyb20gdGhlIGFycmF5XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLl9vblNjcmVlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX29uU2NyZWVuW2ldLmV4cGlyZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5fb25TY3JlZW4uc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm93IGFkZCB0aHJlZSBiYWNrXG4gICAgICAgIHdoaWxlICh0aGlzLl9vblNjcmVlbi5sZW5ndGggPCB0aGlzLm1heFF1ZXVlTGVuZ3RoICYmIHRoaXMuYmFja2xvZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgb25lIG1lc3NhZ2UsIGFuZCBpdCdzIGEgbW9kYWwgbWVzc2FnZSwgdGhlbiBicmVhay5cbiAgICAgICAgICAgIC8vIFdlIG9ubHkgc2hvdyBvbmUgbW9kYWwgbWVzc2FnZSBhdCBhIHRpbWVcbiAgICAgICAgICAgIGlmICh0aGlzLl9vblNjcmVlbi5sZW5ndGggPT0gMSAmJiB0aGlzLl9vblNjcmVlblswXS5pc01vZGFsKCkpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIElmIHdlIGFscmVhZHkgaGF2ZSBtZXNzYWdlc1xuICAgICAgICAgICAgLy8gdGhleSB3b24ndCBiZSBtb2RhbCAoYmVjYXVzZSBvZiB0aGUgYWJvdmUgY2hlY2spXG4gICAgICAgICAgICAvLyBTbyBpZiB0aGUgbmV4dCBvbmUgaXMgbW9kYWwsIHRoZW4gZG9uJ3QgYWRkIGl0LiBXZSBuZWVkIHRvIGNsZWFyIG91dFxuICAgICAgICAgICAgLy8gdGhlIG90aGVyIG1lc3NhZ2VzIGZpcnN0LlxuICAgICAgICAgICAgaWYgKHRoaXMuX29uU2NyZWVuLmxlbmd0aCAhPSAwICYmIHRoaXMuYmFja2xvZ1swXS5pc01vZGFsKCkpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIHRoaXMuX29uU2NyZWVuLnB1c2godGhpcy5iYWNrbG9nLnNoaWZ0KCkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fb25TY3JlZW47XG4gICAgfVxuXG5cbn1cbiJdfQ==