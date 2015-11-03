# getUserDefinedGlobals
Web browser JavaScript snippet that allows you to list all user defined globals.

Released under the MIT license.

## Use

Dump this into your JS console while on the website of interest:  

```js
(function() {
    var i = document.createElement('iframe'); i.style.display = 'none'; document.body.appendChild(i);
    var b = Object.getOwnPropertyNames(i.contentWindow); b.push('getUserDefinedGlobals');
    document.body.removeChild(i);
    console.info(Object.getOwnPropertyNames(context || window).filter(function(x) { return builtins.indexOf(x) === -1; }));
})();
```
