module.exports = {
	cssToNumber : function(px){
		if( px.indexOf('px') < 0 ){
			return px;
		}else{
			return Number( px.replace('px', '') );
		}
	}
}