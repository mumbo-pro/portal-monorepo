const shell = require('shelljs');

shell.exec('npm i');
shell.cd('./portal-front');
shell.exec('npm i');
shell.cd('..');