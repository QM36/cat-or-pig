#!/usr/bin/env node
const readline = require('readline');
let catOrPig = require('./catOrPig');
const rl = readline.createInterface(process.stdin, process.stdout);
let language = process.argv[2]
rl.setPrompt('cop> ');
rl.prompt();

rl.on('line', function(line) {
	switch(line) {
        case 'exit':
            rl.close();
            break;
        default:
            catOrPig(language, line);
            break;
    }
    rl.prompt();
});

rl.on('close', function() {
    process.exit(0);
});