const autoBind = require('auto-bind-inheritance');

module.exports = class Validator{
    constructor(){
        autoBind(this);
    }
}