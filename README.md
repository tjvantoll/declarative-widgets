Declarative Widgets
===================

A simple means of declaratively specifying options for widgets built with the widget factory.

### Usage

Add the options you need as data-* attributes. For instance, this configures jQuery UI's dialog widget's `title` and `height` options.

	<div id="dialog" data-title="Hello World" data-height="600"></div>

Then initialize the widget's plugin:

	$( "#dialog" ).dialog();

If you don't like individually invoking plugins, you can use `$.fn.enhance()` instead. The following initializes the same dialog.

	<div data-role="dialog" data-title="Hello World" data-height="600"></div>
	<script>
	    $( document ).enhance();
	</script>

### Bower

`bower install declarative-widgets`

### Dependencies

* [jQuery](http://jquery.com)
* [Widget Factory](http://api.jqueryui.com/jquery.widget/)