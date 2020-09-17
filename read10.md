# Debugging

_how to search and find your problems in codes_

1. _the flow of task and requirment is very important some tasks can't run if the fllow is not right_
2. _Every statement in a script lives in one of three_
_execution contexts: global that found with vars/ local _context found function /eval function context_
3. _kow that the js run line by line if sum line need information from above it's stack(creating context execution_
4. _be aware to declare variables before using them_
5. _distinguish between local and global scope,try to make every vars local unless you need this variable in different palces_
6. _understand the error_
7. _error object some of it related to property like:name,message,line or fileNumber ,and other related to object like : error/syntaxError/referanceError/typeError/rangError/URIError/EvalError_
8. _use inspect or developerTool_
9. _use console.log()_
10. _try to write the script in side console box in inspect tool_
11. _for events use prevent event and console.log( )with a unigue text so you know it's work_
12. _understand how to use console.log/info/warn/error/group(start and end for it)/table(for array)/assert(for conditions)_
13. _using source tab in inspect by pause the code on any line you want and the check the values stored and also you may use debbuger word in it to create breakpoint(just in inspect)_
14. _try,catch,finally_
15. _there a common error check them first ()/missed or extra charater/logic issues_