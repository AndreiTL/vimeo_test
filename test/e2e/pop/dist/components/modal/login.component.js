"use strict";
const Page = require("wk-e2e-po/lib/Page");
const PageComponent = require("wk-e2e-po/lib/PageComponent");
const PageComponentsCollection = require("wk-e2e-po/lib/PageComponentsCollection");

/**
* @type {login}
* @augments {PageComponent}
*/
class login extends PageComponent {
    constructor(cSelector) {
        if (!cSelector) {
            cSelector = {"type":"css","selector":".iris_modal > .iris_modal-wrapper > .iris_modal-box"};
        }
        super(cSelector);

        /** @type {PageComponent} */
        this.userEmail = this.attach("UserEmail", new PageComponent({"type":"css","selector":"#login_form > .input_wrapper > #signup_email"}));
        /** @type {PageComponent} */
        this.userPassword = this.attach("UserPassword", new PageComponent({"type":"css","selector":"#login_form > .input_wrapper > #login_password"}));
        /** @type {PageComponent} */
        this.logInWithEmail = this.attach("Log In with email", new PageComponent({"type":"css","selector":"[data-gtm-click=\"modal_login_email_click\"]"}));
    }
}

module.exports = login;
