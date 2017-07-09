const five = require('five');
// https://github.com/learn-co-curriculum/node-js-pluggable-flatiron
const pluggableFlatiron = require('pluggable-flatiron');
// https://github.com/learn-co-curriculum/node-js-hello-flatiron
const helloFlatiron = require('hello-flatiron');

pluggableFlatiron.useMe(helloFlatiron);

module.exports = function dashedHello(name) {
  return pluggableFlatiron.hello(`Hello, ${name}.`, result => {
    console.log(result);
    console.log(`High ${five.loud()}! ${five.upHigh()}`);
  });
}
