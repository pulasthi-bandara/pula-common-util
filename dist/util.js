(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
	xhrRequest : function( args ){
		var url = args.url;			//resource url
		var method = args.method;	//'GET', 'POST', 'PUT', 'DELETE'
		var params = args.params;	//object
		var headers = args.headers;	//string/object

		return new Promise(function(resolve, reject){
			var xhr = new XMLHttpRequest();
			xhr.open(xhr.method, url);
			xhr.onload = function () {
				if (this.status >= 200 && this.status < 300) {
					resolve(xhr.response);
				} else {
					reject({
					 	status: this.status,
					 	statusText: xhr.statusText
					});
				}
			};
			xhr.onerror = function () {
				reject({
					status: this.status,
					statusText: xhr.statusText
				});
			};
			//set headers
			Object.keys(params).forEach(function(key){
				xhr.setRequestHeader(key, headers[key]);
			});
			//if params are sent as an object stringify
			if (params && typeof params === 'object') {
				params = Object.keys(params).map(function (key) {
					return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
				}).join('&');
		    }
			xhr.send();
		});
	},
}
},{}],2:[function(require,module,exports){
module.exports = {
	removeClass : function (element, remove) {
		var array = [];
		remove = remove.trim();
		if(element.length === undefined){
			array.push(element);		
		}else{
			array = element
		}

		for (var i = 0; i < array.length; i++) {
			var formatClass = ' ' + array[i].className + ' ';
			formatClass = formatClass.replace(' '+remove+' ', ' ');
			array[i].className = formatClass.trim();
		};
	},

	//add Class to an element
	addClass : function(element, add){
		var array = [];
		add = add.trim();
		if(element.length === undefined){
			array.push(element);		
		}else{
			array = element
		}

		for (var i = 0; i < array.length; i++) {
			var formatClass = ' ' + array[i].className + ' ';
			if( formatClass.indexOf( ' '+add+' ' ) < 0 ){
				array[i].className += ' '+ add;
			}
		};
	}
};
},{}],3:[function(require,module,exports){
(function (global){
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

// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
var root = typeof self === 'object' && self.self === self && self ||
        typeof global === 'object' && global.global === global && global ||
        this;

// Export the Underscore object for **Node.js**, with
// backwards-compatibility for their old module API. If we're in
// the browser, add `util_` as a global object.

if (typeof root.module !== 'undefined' && root.module.exports) {
	exports = module.exports = util_;
} else {
	root.util_ = util_;
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./ajax/promise_request.js":1,"./dom/class_control.js":2,"./parse/css_to_number.js":4}],4:[function(require,module,exports){
module.exports = {
	cssToNumber : function(px){
		if( px.indexOf('px') < 0 ){
			return px;
		}else{
			return Number( px.replace('px', '') );
		}
	}
}
},{}]},{},[3]);
