import 'mocha';
import { expect } from 'chai';
import { ImperialMass } from '../src/ImperialMass';

describe('ImperialMass', () => {
  let imperialMass: ImperialMass;
  beforeEach(() => {
    imperialMass = new ImperialMass(10);
  });
  it('Existe un método getOunces()', () => {
    expect(imperialMass.getOunces).to.exist;
    expect(imperialMass.getOunces).to.be.a('function');
    expect(imperialMass.getOunces()).to.be.equal(160);
  });
  it('Existe un método getPounds()', () => {
    expect(imperialMass.getPounds).to.exist;
    expect(imperialMass.getPounds).to.be.a('function');
    expect(imperialMass.getPounds()).to.be.equal(10);
  });
  it('Existe un método getStones()', () => {
    expect(imperialMass.getStones).to.exist;
    expect(imperialMass.getStones).to.be.a('function');
    expect(imperialMass.getStones()).to.be.equal(0.714);
  });
  it('Existe un método getHundredweights()', () => {
    expect(imperialMass.getHundredweights).to.exist;
    expect(imperialMass.getHundredweights).to.be.a('function');
    expect(imperialMass.getHundredweights()).to.be.equal(0.005);
  });
  it('Existe un método getTons()', () => {
    expect(imperialMass.getTons).to.exist;
    expect(imperialMass.getTons).to.be.a('function');
    expect(imperialMass.getTons()).to.be.equal(0.003);
  });
});