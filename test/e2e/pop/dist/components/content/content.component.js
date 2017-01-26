"use strict";
const Page = require("wk-e2e-po/lib/Page");
const PageComponent = require("wk-e2e-po/lib/PageComponent");
const PageComponentsCollection = require("wk-e2e-po/lib/PageComponentsCollection");

/**
* @type {content}
* @augments {PageComponent}
*/
class content extends PageComponent {
    constructor(cSelector) {
        if (!cSelector) {
            cSelector = {"type":"css","selector":"#cameo"};
        }
        super(cSelector);

        /** @type {PageComponent} */
        this.contentMenu = this.attach("Content Menu", new PageComponent({"type":"css","selector":".section_menu"}));
        /** @type {PageComponent} */
        this.introBackground = this.attach("Intro background", new PageComponent({"type":"css","selector":"#intro"}));
        /** @type {PageComponent} */
        this.introBackground.cameoIntroWrapper = this.introBackground.attach("Cameo Intro Wrapper", new PageComponent({"type":"css","selector":".inner > .animation_wrapper"}));
    }
}

module.exports = content;
