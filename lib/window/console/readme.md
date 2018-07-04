# Console Methods

## [assert()](https://github.com/ovpv/learn-js/blob/53e68498f35a5d9bf355ff39157f0328dd0f6de1/lib/window/console/index.js#L22)
Writes an error to the console when the evaluated expression is false.

## [clear()](https://github.com/ovpv/learn-js/blob/53e68498f35a5d9bf355ff39157f0328dd0f6de1/lib/window/console/index.js#L27)
Clears the console.

## [count()](https://github.com/ovpv/learn-js/blob/53e68498f35a5d9bf355ff39157f0328dd0f6de1/lib/window/console/index.js#L32)
Writes the number of times that count() has been invoked at the same line and with the same label.

## [debug()](https://github.com/ovpv/learn-js/blob/53e68498f35a5d9bf355ff39157f0328dd0f6de1/lib/window/console/index.js#L38)
Identical to console.log().

## [dir()](https://github.com/ovpv/learn-js/blob/53e68498f35a5d9bf355ff39157f0328dd0f6de1/lib/window/console/index.js#L42)
Prints a JavaScript representation of the specified object. 

## [dirxml()](https://github.com/ovpv/learn-js/blob/53e68498f35a5d9bf355ff39157f0328dd0f6de1/lib/window/console/index.js#L50)
Prints an XML representation of the descendant elements of object if possible, or the JavaScript representation if not. Calling console.dirxml() on HTML and XML elements is equivalent to calling console.log().

## [error()](https://github.com/ovpv/learn-js/blob/53e68498f35a5d9bf355ff39157f0328dd0f6de1/lib/window/console/index.js#L53)
Prints a message similar to console.log(), styles the message like an error, and includes a stack trace from where the method was called.

## [exception()](https://github.com/ovpv/learn-js/blob/53e68498f35a5d9bf355ff39157f0328dd0f6de1/lib/window/console/index.js#L56)
another alias for console.error

## [group(),groupEnd()](https://github.com/ovpv/learn-js/blob/53e68498f35a5d9bf355ff39157f0328dd0f6de1/lib/window/console/index.js#L60)
Starts a new logging group with an optional title. All console output that occurs after console.group() and before console.groupEnd() is visually grouped together.

## [groupCollapsed()](https://github.com/ovpv/learn-js/blob/53e68498f35a5d9bf355ff39157f0328dd0f6de1/lib/window/console/index.js#L73)
Creates a new logging group that is initially collapsed instead of open.

## [log()](https://github.com/ovpv/learn-js/blob/53e68498f35a5d9bf355ff39157f0328dd0f6de1/lib/window/console/index.js#L86)
Displays a message in the console. Pass one or more objects to this method. Each object is evaluated and concatenated into a space-delimited string.

## [info()](https://github.com/ovpv/learn-js/blob/53e68498f35a5d9bf355ff39157f0328dd0f6de1/lib/window/console/index.js#L89)
Prints a message like console.log() but also shows an icon (blue circle with white "i") next to the output.

## [profile(),profileEnd()](https://github.com/ovpv/learn-js/blob/53e68498f35a5d9bf355ff39157f0328dd0f6de1/lib/window/console/index.js#L93)
Starts a JavaScript CPU profile with an optional label. To complete the profile, call console.profileEnd(). Each profile is added to the Profiles panel.
Stops the current JavaScript CPU profiling session if one is in progress and prints the report to the Profiles panel.

## [table()](https://github.com/ovpv/learn-js/blob/53e68498f35a5d9bf355ff39157f0328dd0f6de1/lib/window/console/index.js#L102)
Logs an array of objects as a table.

## [time(),timeEnd()](https://github.com/ovpv/learn-js/blob/53e68498f35a5d9bf355ff39157f0328dd0f6de1/lib/window/console/index.js#L114)
Starts a new timer. Call console.timeEnd() to stop the timer and print the elapsed time to the Console.

## [timestamp()](https://github.com/ovpv/learn-js/blob/53e68498f35a5d9bf355ff39157f0328dd0f6de1/lib/window/console/index.js#L128)
Adds an event to the Timeline during a recording session.

## [trace()](https://github.com/ovpv/learn-js/blob/53e68498f35a5d9bf355ff39157f0328dd0f6de1/lib/window/console/index.js#L132)
Prints a stack trace from the point where the method was called.

## [warn()](https://github.com/ovpv/learn-js/blob/53e68498f35a5d9bf355ff39157f0328dd0f6de1/lib/window/console/index.js#L146)
Prints a message like console.log(), but also displays a yellow warning icon next to the logged message.



