Declarative Widgets
===================

A simple means of declaratively specifying options for widgets built with the widget factory.

> This implementation is a slightly modified version of what is used in [jQuery Mobile](https://github.com/jquery/jquery-mobile).

### Usage

Add the options you need as data-* attributes. For instance, this configures jQuery UI's dialog widget's `title` and `height` options.

	<div id="dialog" data-title="Hello World" data-height="600"></div>

Then initialize the widget's plugin:

	$( "#dialog" ).dialog();

### Dependencies

* [Widget Factory](http://api.jqueryui.com/jquery.widget/)