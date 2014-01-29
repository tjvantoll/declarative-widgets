require.config({
	baseUrl: "../"
});

require([ "declarative-widgets" ], function( declarative ) {
	test( "Verify public API", function() {
		equal( typeof declarative.initWidgets, "function" );
	});
});
