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