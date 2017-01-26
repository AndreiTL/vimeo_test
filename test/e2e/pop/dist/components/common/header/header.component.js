"use strict";
const Page = require("wk-e2e-po/lib/Page");
const PageComponent = require("wk-e2e-po/lib/PageComponent");
const PageComponentsCollection = require("wk-e2e-po/lib/PageComponentsCollection");

/**
* @type {header}
* @augments {PageComponent}
*/
class header extends PageComponent {
    constructor(cSelector) {
        if (!cSelector) {
            cSelector = {"type":"css","selector":"#topnav_desktop"};
        }
        super(cSelector);

        /** @type {PageComponent} */
        this.avatar = this.attach("Avatar", new PageComponent({"type":"css","selector":"#topnav_menu_avatar"}));
        /** @type {PageComponent} */
        this.avatar.dropdownMenu = this.avatar.attach("Dropdown menu", new PageComponent({"type":"css","selector":"#topnav_user_dropdown"}));
        /** @type {PageComponent} */
        this.logInButton = this.attach("Log In Button", new PageComponent({"type":"css","selector":"[data-ga-event-click=\"top_nav|login\"]"}));
        /** @type {PageComponent} */
        this.joinButton = this.attach("Join Button", new PageComponent({"type":"css","selector":"[data-ga-event-click=\"top_nav|join\"]"}));
        /** @type {PageComponent} */
        this.uploadButton = this.attach("Upload Button", new PageComponent({"type":"css","selector":"[data-fatal-attraction=\"component:top_nav|keyword:upload\"]"}));
    }
}

module.exports = header;
