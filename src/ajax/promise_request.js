module.exports = {
	xhrRequest : function( args ){
		var url = args.url;			//resource url
		var method = args.method;	//'GET', 'POST', 'PUT', 'DELETE'
		var params = args.params || {};	//object
		var headers = args.headers || {};	//string/object

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