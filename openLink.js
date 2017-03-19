var oWebViewInterface = window.nsWebViewInterface;
/**
 * Function that sends the links arguments to the webview component. 
 * 
 * @param {any} args 
 */
function openLink(args) {
    oWebViewInterface.emit('fileSelection', args);
}