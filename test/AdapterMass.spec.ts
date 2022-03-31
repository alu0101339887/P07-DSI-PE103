
import 'mocha';
import { expect } from 'chai';
import { AdapterMass } from '../src/AdapterMass';
import { ImperialMass } from '../src/ImperialMass';

describe('AdapterMass', () => {
  let metricMass: AdapterMass;
  let imperialMass: ImperialMass;
  beforeEach(() => {
    imperialMass = new ImperialMass(10);
    metricMass = new AdapterMass(10, imperialMass);
  });
  it('Existe un método getGrams()', () => {
    expect(metricMass.getGrams).to.exist;
    expect(metricMass.getGrams).to.be.a('function');
    expect(metricMass.getGrams()).to.be.equal(4535.92);
  });
  it('Existe un método getKilograms()', () => {
    expect(metricMass.getKilograms).to.exist;
    expect(metricMass.getKilograms).to.be.a('function');
    expect(metricMass.getKilograms()).to.be.equal(4.535);
  });
  it('Existe un método getTonnes()', () => {
    expect(metricMass.getTonnes).to.exist;
    expect(metricMass.getTonnes).to.be.a('function');
    expect(metricMass.getTonnes()).to.be.equal(0.005);
  });
});