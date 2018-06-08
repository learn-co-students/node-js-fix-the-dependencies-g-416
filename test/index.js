const chai = require('chai');
const chaiSpies = require('chai-spies');
const five = require('five');

chai.use(chaiSpies);

const lib = require('../lib');

const expect = chai.expect;

describe('lib', () => {
  it('logs the result of calling helloFlatiron()', () => {
    const spy = chai.spy.on(console, 'log');

    lib('foo', spy);

    expect(spy).to.have.been.called.with('H-e-l-l-o-,- -f-o-o-.');

    console.log.reset();
  });


  it('logs some calls to five()', () => {
    const spy = chai.spy.on(console, 'log');

    lib('foo', spy);

    expect(spy).to.have.been.called.with(`High ${five.loud()}! ${five.upHigh()}`);

    console.log.reset();
  })
});
