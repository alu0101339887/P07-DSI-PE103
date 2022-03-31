import { ImperialLength } from './ImperialLength';

/**
 * AdapterLength es una clase que adapta el sistema imperial a metrico.
 */
export class AdapterLength {
  constructor(private imperialLength: ImperialLength) {}

  public getCentimeters(): number {
    return this.imperialLength.getInches() * 2.54;
  }

  public getMeters(): number {
    return this.imperialLength.getFeet() * 0.3048;
  }

  public getKilometers(): number {
    return this.imperialLength.getYards() * 0.9144;
  }
}

