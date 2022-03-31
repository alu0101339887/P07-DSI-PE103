
import 'mocha';
import { expect } from 'chai';
import { AdapterLength } from '../src/AdapterLength';
import { ImperialLength } from '../src/ImperialLength';

describe('AdapterLength', () => {
  let metricLength: AdapterLength;
  let imperialLength: ImperialLength;
  beforeEach(() => {
    imperialLength = new ImperialLength(10);
    metricLength = new AdapterLength(10, imperialLength);
  });
  it('Existe un método getCentimeters()', () => {
    expect(metricLength.getCentimeters).to.exist;
    expect(metricLength.getCentimeters).to.be.a('function');
    expect(metricLength.getCentimeters()).to.be.equal(304.8);
  });
  it('Existe un método getMeters()', () => {
    expect(metricLength.getMeters).to.exist;
    expect(metricLength.getMeters).to.be.a('function');
    expect(metricLength.getMeters()).to.be.equal(3.048);
  });
  it('Existe un método getKilometers()', () => {
    expect(metricLength.getKilometers).to.exist;
    expect(metricLength.getKilometers).to.be.a('function');
    expect(metricLength.getKilometers()).to.be.equal(0.003);
  });
});