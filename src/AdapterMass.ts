import { ImperialMass } from './ImperialMass';

/**
 * AdapterMass es una clase que adapta el sistema imperial a metrico.
 */
export class AdapterMass {
  constructor(private imperialMass: ImperialMass) {}

  public getGrams(): number {
    return this.imperialMass.getOunces() * 28.3495;
  }

  public getKilograms(): number {
    return this.imperialMass.getPounds() * 0.453592;
  }

  public getTonnes(): number {
    return this.imperialMass.getStones() * 6.35029;
  }
}