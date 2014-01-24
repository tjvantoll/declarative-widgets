(function( $ ) {
	var capitals = /[A-Z]/g,
		buildAttribute = function( c ) {
			return "-" + c.toLowerCase();
		},
		stringToType = function( data ) {

			// Copied from core's src/data.js:dataAttr()
			var rbrace = rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
			try {
				data = data === "true" ? true :
				data === "false" ? false :
				data === "null" ? null :
				// Only convert to a number if it doesn't change the string
				+data + "" === data ? +data :
				rbrace.test( data ) ? JSON.parse( data ) :
				data;
			} catch( err ) {}
			
			return data;
		};
	
	$.extend( $.Widget.prototype, {
		_getCreateOptions: function() {
			var option, value,
				options = {};

			for ( option in this.options ) {
				value = this.element.attr( "data-" + option.replace( capitals, buildAttribute ) );
				value = stringToType( value );
				if ( value != null ) {
					options[ option ] = value;
				}
			}
			
			return options;
		}
	});
}( jQuery ));
