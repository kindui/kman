#!/usr/bin/env node

var program = require('commander'),
      color = require('colorful'),
      fs = require('fs'),
      package = require('./package.json'),
      main = require('./main') ;

program
      .version(package.version)
      //.option('-r, --rule [path]', 'path for rule file')
      .parse(process.argv);


program.on('--help', function () {
      console.log('  Examples:');
      console.log('kman init');
});

var firstArgs = program.args[0];

if (firstArgs == 'init') {
      main.init();
      return ;
}
if (firstArgs == 'debug') {
      main.debug();
      return ;
}
if (firstArgs == 'build') {
      main.build();
      return ;
}


console.log('\nWelcome to use ' + color.magenta('kman') + ' ' + package.version);
console.log(color.yellow('\nYou can init a (requirejs+gulp) sample project easily') + '\n');
//
console.log('Usage:\n');
console.log('     kman init');
console.log('     kman debug');
console.log('     kman build');
//console.log('     -r, --rule [javascript file path]   path for rule file');
//
//console.log('\nExamples:\n');
//console.log('     kman init');
//console.log('     kman debug');
//console.log('     kman build');
//console.log('     webproxy start --port 9000');

console.log('\n\n' + color.yellow('Author:human huang <halfthink@163.com>'));
console.log(color.yellow('QQ交流群:415719701') + '\n');
