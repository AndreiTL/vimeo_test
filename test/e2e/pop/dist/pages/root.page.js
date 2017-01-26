"use strict";
const Page = require("wk-e2e-po/lib/Page");
const PageComponent = require("wk-e2e-po/lib/PageComponent");
const PageComponentsCollection = require("wk-e2e-po/lib/PageComponentsCollection");

/**
* @type {root}
* @augments {Page}
*/
class root extends Page {
    constructor(cSelector, cUrl) {
        if (!cSelector) {
            cSelector = {"type":"css","selector":"body"};
        }
        super(cSelector, cUrl);

    }
}

module.exports = root;
