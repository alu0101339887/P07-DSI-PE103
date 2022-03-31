
import 'mocha';
import { expect } from 'chai';
import { MetricMass } from '../src/MetricMass';

describe('MetricMass', () => {
  let metricMass: MetricMass;
  beforeEach(() => {
    metricMass = new MetricMass(10);
  });
  it('Existe un método getGrams()', () => {
    expect(metricMass.getGrams).to.exist;
    expect(metricMass.getGrams).to.be.a('function');
    expect(metricMass.getGrams()).to.be.equal(10);
  });
  it('Existe un método getKilograms()', () => {
    expect(metricMass.getKilograms).to.exist;
    expect(metricMass.getKilograms).to.be.a('function');
    expect(metricMass.getKilograms()).to.be.equal(0.01);
  });
  it('Existe un método getTonnes()', () => {
    expect(metricMass.getTonnes).to.exist;
    expect(metricMass.getTonnes).to.be.a('function');
    expect(metricMass.getTonnes()).to.be.equal(0);
  });
});