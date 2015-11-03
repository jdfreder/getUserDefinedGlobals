# getUserDefinedGlobals
Web browser JavaScript snippet that allows you to list all user defined globals.

Released under the MIT license.

## Use

Dump this into your JS console while on the website of interest:  

```js
function cb() { console.info(getUserDefinedGlobals()); }
var s = document.createElement('script'); s.type = 'text/javascript'; s.src = 'https://cdn.rawgit.com/jdfreder/getUserDefinedGlobals/master/index.js'; s.onreadystatechange = cb; s.onload = cb; document.body.appendChild(s);
```
