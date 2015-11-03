# getUserDefinedGlobals
Web browser JavaScript snippet that allows you to list all user defined globals.

Released under the MIT license.

## Use

Dump this into your JS console while on the website of interest:  

```js
var s = document.createElement('script'); s.src = 'https://cdn.rawgit.com/jdfreder/getUserDefinedGlobals/master/index.js'; s.onload = function() { console.info(getUserDefinedGlobals()); }; document.body.appendChild(s);
```
