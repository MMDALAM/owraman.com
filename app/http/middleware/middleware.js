const autoBind = require('auto-bind-inheritance');

module.exports = class middleware {
    constructor() {
        autoBind(this);
    }
}