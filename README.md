# LinkedIn_Node.js_EssentialTraining
Node.js training provided by LinkedIn

Conclusion:

Chapter 06:
- The stream interface provides us with the technique to read and write data. We can use it to read and write data to files, to communicate with the internet, to communicate with other processes. In fact we've already been using it. We've been using the stream interface to read and write data to and from the terminal.
- Node JS developers are using stream IO constantly
- writeStream.write(data) - this will write data into chosen file
- Node, JS comes with a child process module, which allows you to execute external processes in your environment. In other words, you node JS app can run and communicate with other applications within the environment that is hosted. In the next two lessons, we're going to take a look at the two main functions used to create a child process, spawn and execute.

Chapter 05:
- Node.js also ships with a module that allows us to interact with the file system. The fs module can be used to list files in directories, create new files in directories, stream files, watch files, modify file permissions, just about anything you would need to work with files and directories.

- creating files and directories, appending content of file based on it's values and variables
- moving directories and files, fs module etc..

Chapter 04:
- many handlers and things, emmiters, mainly working with modules, also separating file into modules and then working with it as require()


Chapter 03:
- we can run JavaScript files from node by running terminal, make sure that you're in the right direction (terminal dir, cd.. etc)
    the command is: node fileName.js hit enter
- https://nodejs.org/api/globals.html documentation 
- global.js a lot of new stuff included.. require, __filename, __dirname
- there is a lot of things going on.. files were created in respective order: firstFile,gloabl,globalProcesses,questions,timers,timers2
- it was mainly about introducing the asynchronous feature, timer, stdin and stdout, processes

Chapter 02:
- installing VS Code.. (Skip)
- installing node.js (current version is v14.17.1)
- installing npm (version 6.14.13)

Chapter 01:
- Node.js is open source, node JS is single threaded / asynchronous - non blocking driven IO, it can do more things at once..
