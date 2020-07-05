const chai = require('chai');
const chaiSpies = require('chai-spies');
const five = require('five');

chai.use(chaiSpies);

const lib = require('../lib');

const expect = chai.expect;

describe('lib', () => {
  const spy = chai.spy.on(console, 'log');
  afterEach(() => {
    console.log.reset && console.log.reset();
  });

  it('logs the result of calling helloFlatiron()', () => {

    lib('foo', spy);

    expect(spy).to.have.been.called.with('H-e-l-l-o-,- -f-o-o-.');
  });


  it('logs some calls to five()', () => {

    lib('foo', spy);

    expect(spy).to.have.been.called.with(
      `High ${five.loud()}! ${five.upHigh()}`
    );
  });
});
