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
			four: 0,
			five: [ "array" ],
			six: { key: "value" }
		}
	});

	test( "Public API", function() {
		expect( 1 );
		equal( typeof declarative.enhance, "function" );
	});

	test( "Attribute reading", function() {
		expect( 6 );
		var options,
			div = $( "#attribute-test" );

		fixture.append( div );
		div.test();

		options = div.test( "instance" ).options;
		equal( options.one, "foo" );
		equal( options.two, true );
		equal( options.three, false );
		equal( options.four, 4 );
		deepEqual( options.five, [ "foo" ]);
		deepEqual( options.six, { key: "bar" });
	});

	test( "enhance plugin - called on parent element", function() {
		expect( 2 );
		var div = $( "<div>", {
			"data-role": "test",
			"data-one": "bar"
		});

		fixture.append( div ).enhance();

		ok( div.is( ":tj-test" ) );
		equal( div.test( "instance" ).options.one, "bar" );
	});

	test( "enhance plugin - called on element itself", function() {
		expect( 2 );
		var div = $( "<div>", {
			"data-role": "test",
			"data-one": "bar"
		});

		fixture.append( div );
		div.enhance();

		ok( div.is( ":tj-test" ) );
		equal( div.test( "instance" ).options.one, "bar" );
	});
});
