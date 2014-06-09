(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "jquery", "widget" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {
	var plugin = {
		enhance: function() {
			this.find( "[data-role]" ).addBack( "[data-role]" ).each(function() {
				var element = $( this ),
					role = element.attr( "data-role" );
				element[ role ]();
			});
			return this;
		}
	};

	$.extend( $.Widget.prototype, {
		_getCreateOptions: function() {
			var option,
				value,
				options = {};

			for ( option in this.options ) {
				value = this.element.data( option );
				if ( value != null ) {
					options[ option ] = value;
				}
			}

			return options;
		}
	});

	$.extend( $.fn, plugin );
	return plugin;
}));
