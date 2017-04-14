# Angular2 Balloon Message

What it does : Shows a baloon on the top right corner
of the screen to the user.

It has 4 types of messages Success, Info, Warning and Error.

The Error requires clicking on it before it will dismiss

This balloon message NPM is written in TypeScript for Angular2 and uses bootstrap3 classes for style.

Setup and example usgage usage :

### build file - angular-cli.json
Add the bootstrap css file to your package builder file, in the case of angular-cli, add it to the apps.styles array

    {
      ...
      "apps": [
        {
          ...
    
          "styles": [
            ...
            "../node_modules/bootstrap/dist/css/bootstrap.min.css"
          ],

### app.component.html

Add the following in your main component.html

    <ng2-balloon-msg></ng2-balloon-msg>

### app.module.ts
Add the following lines to your apps main module imports (app.module.ts?)

    import { Ng2BalloonMsgModule, Ng2BalloonMsgService} from "@synerty/ng2-balloon-msg";

Again, in the main module, Add Ng2BalloonMsgModule to the "imports" array.

    Ng2BalloonMsgModule

And finally, Ng2BalloonMsgService to the "providers" array

    Ng2BalloonMsgService


Example:

    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2BalloonMsgModule
      ],
      providers: [Ng2BalloonMsgService],
      bootstrap: [AppComponent]
    })
    export class AppModule { }

### where-ever.component.ts
To use the balloon service anywhere in your app :

Import the service

    import {Ng2BalloonMsgService} from "@synerty/ng2-balloon-msg";

Add it to your component constructor.

    constructor(private msgService: Ng2BalloonMsgService) {

Now call the show functions

        this.msgService.showSuccess("This is a test SUCCESS");
        this.msgService.showInfo("This is a test info");
        this.msgService.showWarning("This is a test warning");
        this.msgService.showError("This is a test error");

You can also create modal dialogs

        let p = this.msgService.showMessage(
            "This is a Error Confirm Cancel.",
            UsrMsgLevel.Error,
            UsrMsgType.ConfirmCancel, {
                confirmText: "OK Confirm",      // Optional
                cancelText: "Cancel xx",        // Optional
                dialogTitle: "Awesome title"    // Optional
        
            }
        );
        
        p.catch(err => {
            console.log("Ignoring reject call from promise for this test.");
        });


## Scaffold

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.20-4.

The default angular-cli test app was used as a test bed to show the messages.
Below are the standard instructions for the angular-cli usage.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
