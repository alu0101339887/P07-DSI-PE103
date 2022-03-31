import 'mocha';
import { expect } from 'chai';
import { ImperialLength } from '../src/ImperialLength';

describe('ImperialLength', () => {
  let imperialLength: ImperialLength;
  beforeEach(() => {
    imperialLength = new ImperialLength(10);
  });
  it('Existe un método getInches()', () => {
    expect(imperialLength.getInches).to.exist;
    expect(imperialLength.getInches).to.be.a('function');
    expect(imperialLength.getInches()).to.be.equal(120);
  });
  it('Existe un método getFeet()', () => {
    expect(imperialLength.getFeet).to.exist;
    expect(imperialLength.getFeet).to.be.a('function');
    expect(imperialLength.getFeet()).to.be.equal(10);
  });
  it('Existe un método getYards()', () => {
    expect(imperialLength.getYards).to.exist;
    expect(imperialLength.getYards).to.be.a('function');
    expect(imperialLength.getYards()).to.be.equal(3.333);
  });
  it('Existe un método getMiles()', () => {
    expect(imperialLength.getMiles).to.exist;
    expect(imperialLength.getMiles).to.be.a('function');
    expect(imperialLength.getMiles()).to.be.equal(0.002);
  });
});