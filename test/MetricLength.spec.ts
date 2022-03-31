
import 'mocha';
import { expect } from 'chai';
import { MetricLength } from '../src/MetricLength';

describe('MetricLength', () => {
  let metricLength: MetricLength;
  beforeEach(() => {
    metricLength = new MetricLength(10);
  });
  it('Existe un método getCentimeters()', () => {
    expect(metricLength.getCentimeters).to.exist;
    expect(metricLength.getCentimeters).to.be.a('function');
    expect(metricLength.getCentimeters()).to.be.equal(1000);
  });
  it('Existe un método getMeters()', () => {
    expect(metricLength.getMeters).to.exist;
    expect(metricLength.getMeters).to.be.a('function');
    expect(metricLength.getMeters()).to.be.equal(10);
  });
  it('Existe un método getKilometers()', () => {
    expect(metricLength.getKilometers).to.exist;
    expect(metricLength.getKilometers).to.be.a('function');
    expect(metricLength.getKilometers()).to.be.equal(0.01);
  });
});