require.config({
	baseUrl: "../"
});

require([ "declarative-widgets" ], function( declarative ) {
	var fixture = $( "#qunit-fixture" );
	$.widget( "tj.test", {
		options: {
			one: "string",
			two: false,
			three: true,
			four: 0
		}
	});

	test( "Public API", function() {
		expect( 1 );
		equal( typeof declarative.initWidgets, "function" );
	});

	test( "Attribute reading", function() {
		expect( 4 );
		var options,
			div = $( "<div>", {
				"data-one": "foo",
				"data-two": true,
				"data-three": false,
				"data-four": 4
			});

		fixture.append( div );
		div.test();

		options = div.test( "instance" ).options;
		equal( options.one, "foo" );
		equal( options.two, true );
		equal( options.three, false );
		equal( options.four, 4 );
	});

	test( "initWidgets plugin", function() {
		expect( 2 );
		var div = $( "<div>", {
			"data-widget": "test",
			"data-one": "bar"
		});

		fixture.append( div ).initWidgets();

		ok( div.is( ":tj-test" ) );
		equal( div.test( "instance" ).options.one, "bar" );
	});
});
