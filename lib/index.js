const five = require('five');
const pluggableFlatiron = require('pluggable-flatiron');
const helloFlatiron = require('hello-flatiron');

pluggableFlatiron.use(helloFlatiron);

module.exports = function dashedHello(name) {
  return pluggableFlatiron.hello(`Hello, ${name}.`, result => {
    console.log(result);
    console.log(`High ${five.loud()}! ${five.upHigh()}`);
  });
}
