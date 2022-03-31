import { ImperialLength } from './ImperialLength';

/**
 * AdapterLength es una clase que adapta el sistema imperial a metrico.
 */
export class AdapterLength {
  constructor(private imperialLength: ImperialLength) {}

  /**
   * Método que convertirá pulgadas a centimetros.
   * @returns {number} El valor en centimetros
   */
  public getCentimeters(): number {
    return Number((this.imperialLength.getInches() * 2.54).toFixed(3));
  }

  /**
   * Método que convertirá pies a metros.
   * @returns {number} El valor en metros
   */
  public getMeters(): number {
    return Number((this.imperialLength.getFeet() / 3.281).toFixed(3));
  }

  /**
   * Método que convertirá de yardas a kilómetros.
   * @returns {number} El valor en kilómetros
   */
  public getKilometers(): number {
    return Number((this.imperialLength.getYards() / 1094).toFixed(3));
  }
}

