'use strict';

var util_modules = [
	require('./parse/css_to_number.js'),
	require('./dom/class_control.js'),
	require('./ajax/promise_request.js')
];

var util_ = {};

for (var i = 0; i < util_modules.length; i++) {
	Object.keys(util_modules[i]).forEach(function(key){
		util_[ key ] = util_modules[i][key];
	});
};

(function(){

	// Establish the root object, `window` (`self`) in the browser, `global`
	// on the server, or `this` in some virtual machines. We use `self`
	// instead of `window` for `WebWorker` support.
	var root = typeof self === 'object' && self.self === self && self ||
	        typeof global === 'object' && global.global === global && global ||
	        this;

	// Export the Underscore object for **Node.js**, with
	// backwards-compatibility for their old module API. If we're in
	// the browser, add `util_` as a global object.
	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = util_;
		}
		exports.util_ = util_;
	} else {
		root.util_ = util_;
	}
	console.log('module loaded');
})();