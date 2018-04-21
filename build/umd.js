(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.nextStep = factory());
}(this, (function () { 'use strict';

/**
 * generates a list of iterable functions
 * @param {...function} yields - stores iterable functions
 * @return {object}
 */
function Iterator() {
    var yields = [], len = arguments.length;
    while ( len-- ) yields[ len ] = arguments[ len ];

    var cursor = 0;
    /**
     *
     * @param {boolean} done - defines if the iteration has been completed
     * @param {*} value - cursor return value
     * @return {object}
     */
    function status(done, value) {
        return { done: done, value: value };
    }
    /**
     * check if there is a function in the cursor
     * either to execute the function or finish the iterable
     * @param {*} argument
     * @return {object}
     */
    function next(argument) {
        if (yields[cursor]) {
            return status(false, yields[cursor++](argument));
        } else {
            return status(true);
        }
    }
    return { next: next };
}

return Iterator;

})));
