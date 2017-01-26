"use strict";
const Page = require("wk-e2e-po/lib/Page");
const PageComponent = require("wk-e2e-po/lib/PageComponent");
const PageComponentsCollection = require("wk-e2e-po/lib/PageComponentsCollection");
const MasterPageObject = require("./root.page");

/**
* @type {home}
* @augments {MasterPageObject}
*/
class home extends MasterPageObject {
    constructor(cSelector, cUrl) {
        if (!cUrl) {
            cUrl = "/cameo";
        }
        super(cSelector, cUrl);

        /** @type {header} */
        this.headerDesktop = this.attach("Header Desktop", new (require("../components/common/header/header.component"))());
        /** @type {login} */
        this.modalLogIn = this.attach("Modal LogIn", new (require("../components/modal/login.component"))());
        /** @type {content} */
        this.cameoContent = this.attach("Cameo Content", new (require("../components/content/content.component"))());
    }
}

module.exports = home;
