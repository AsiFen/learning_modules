import greet from './greet.js'

import chalk from 'chalk';

import figlet from 'figlet';


figlet('Asi', function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    // console.log(data);
  });

console.log(chalk.bgCyan.rgb(123, 45, 67).underline('Hello world!'));



console.log(greet('Asi'));