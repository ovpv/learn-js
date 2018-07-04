# Window Object

## [window.console](https://github.com/ovpv/learn-js/tree/master/lib/window/console)
The Console object provides access to the browser's debugging console (e.g. the Web Console in Chrome/Firefox). The specifics of how it works varies from browser to browser, but there is a de facto set of features that are typically provided.

## [window.open()](https://github.com/ovpv/learn-js/tree/master/lib/window/console)
The Window interface's open() method loads the specified resource into the browsing context (window, <iframe> or tab) with the specified name. If the name doesn't exist, then a new window is opened and the specified resource is loaded into its browsing context.

## [window.close()](https://github.com/ovpv/learn-js/tree/master/lib/window/console)
The Window.close() method closes the current window, or the window on which it was called.
This method is only allowed to be called for windows that were opened by a script using the window.open() method. If the window was not opened by a script, an error similar to this one appears in the console: Scripts may not close windows that were not opened by script.

## [window.atob()](https://github.com/ovpv/learn-js/tree/master/lib/window/console)
The WindowOrWorkerGlobalScope.atob() function decodes a string of data which has been encoded using base-64 encoding. You can use the btoa() method to encode and transmit data which may otherwise cause communication problems, then transmit it and use the atob() method to decode the data again. For example, you can encode, transmit, and decode control characters such as ASCII values 0 through 31.

## [window.btoa()](https://github.com/ovpv/learn-js/tree/master/lib/window/console)

