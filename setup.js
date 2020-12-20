const shell = require('shelljs');

shell.exec('npm i');
shell.cd('./client');
shell.exec('npm i');
shell.cd('..');
