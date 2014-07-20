Declarative Widgets
===================

A simple plugin (`$.fn.enhance()`) that lets you customize widget-factory-built widgets with HTML attributes.

### How does it work?

Let's say you want to create a [jQuery UI dialog widget](http://jqueryui.com/dialog/). You're probably used to writing code like this:

```
<div id="dialog"></div>
<script>
    $( "#dialog" ).dialog({
        title: "Hello World",
        height: 600
    });
</script>
```

With the `.enhance()` plugin, that same code looks like this:

```
<div id="dialog" data-role="dialog" data-title="Hello World" data-height="600"></div>
<script>
    $( "#dialog" ).enhance();
</script>
```

Note two things here. First, the `data-role` attribute tells `.enhance()` which widget to initialize. Second, options are configured with HTML5 data-* attributes of the same name. The `data-title` attributes controls the `title` of the dialog, the `data-height` attribute controls the `height` of the dialog, and so forth. Camel-cased options need to be specified as multi-word attributes—for instance the dialog widget's `autoOpen` option can be configured with a `data-auto-open` attribute.

### Initializing multiple widgets at once

When you call `.enhance()` on an element, it enhances itself (if necessary), and then looks for any child elements that have a `data-role` attribute. Therefore, you can use `.enhance()` to initialize multiple widgets at once. In fact, the recommended approach is to call `.enhance()` on the `document` object itself. For instance, the following creates instances of the jQuery UI tabs, progressbar, slider, and dialog widgets:

```
<div data-role="tabs">
    <ul>
        <li><a href="#one">One</a></li>
        <li><a href="#two">Two</a></li>
    </ul>
    <div id="one">
        <div data-role="progressbar" data-value="false"></div>
    </div>
    <div id="two">
        <div data-role="slider" data-min="0" data-max="50"
            data-step="10"></div>
    </div>
</div>

<div data-role="dialog" data-height="200" data-width="500"></div>

<script>
    $( document ).enhance();
</script>
```

Awesome, right?

### Show me a live demo that I can experiment with to judge the awesomeness for myself

Ok. [Here you go](http://jsfiddle.net/tj_vantoll/5Hr4r/).

### AMD usage

The `.enhance()` plugin supports AMD usage, including the use of the [AMD modules that were introduced in jQuery UI 1.11](http://learn.jquery.com/jquery-ui/environments/amd/). For details on usage, refer to [this repository's packaged demo](https://github.com/tjvantoll/declarative-widgets/blob/master/demos/usage-amd.html), which is a complete example of using this library in an AMD setting.

### Bower usage

`bower install declarative-widgets`

### Dependencies

* [jQuery Core](http://jquery.com)
* [Widget Factory](http://api.jqueryui.com/jquery.widget/)

### License

MIT. Go nuts.

### Want to learn more?

A more detailed explanation of this plugin, as well as a thorough look at its inner workings can be found in [*jQuery UI in Action*](http://tjvantoll.com/jquery-ui-in-action.html).