'use strict';

var util_modules = [
	require('./parse/css_to_number.js'),
	require('./dom/class_control.js'),
	require('./ajax/promise_request.js')
];

global.util_ = {};

for (var i = 0; i < util_modules.length; i++) {
	Object.keys(util_modules[i]).forEach(function(key){
		util_[ key ] = util_modules[i][key];
	});
};

console.log( util_ );

module.exports = util_;

