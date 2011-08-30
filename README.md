IE6Bluescreen
====================================

IE6Bluescreen is a little (fun) jQuery project which show's a **bluescreen** for IE6 browsers instead the normal website.

How to include it
----------

```
$ cd path/to/your/js
$ wget https://github.com/DevDavido/IE6Bluescreen/raw/master/jquery.ie6bluescreen.js
```

In your HTML:

```html
<script src="path/to/your/js/jquery.ie6bluescreen.js"></script>
```

Replace `path/to/your/js` with the path to your JavaScript directory, e.g. `public/javascripts`.
The plugin will start automatically if `jquery.ie6bluescreen.js` is included.


Minimize it
----------

```
curl \
  -d output_info=compiled_code \
  -d compilation_level=SIMPLE_OPTIMIZATIONS \
  -d code_url=https://github.com/DevDavido/IE6Bluescreen/raw/master/jquery.ie6bluescreen.js \
  http://closure-compiler.appspot.com/compile
```


Screenshot
----------

[![Screenshot](http://img585.imageshack.us/img585/836/screenshotie6bluescreen.png)](http://img585.imageshack.us/img585/836/screenshotie6bluescreen.png)


License
-------
Released under the MIT License.

Copyright (c) 2011 DevDavido