// See LICENSE for license information.

/**
 * Gets an array of the user defined globals
 * @param  {object} [context=window] context to check for user defined globals
 * @return {string[]} global variable names
 */
function getUserDefinedGlobals(context) {
    
    // Get a list of builtin window property names from a new iframe.
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    var builtins = Object.getOwnPropertyNames(iframe.contentWindow);
    document.body.removeChild(iframe);
    
    // Ignore self
    builtins.push('getUserDefinedGlobals');
    
    // Filter the property names of this window against the builtins.
    return Object.getOwnPropertyNames(context || window).filter(function(x) {
        return builtins.indexOf(x) === -1;
    });
}
