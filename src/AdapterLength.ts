import { ImperialLength } from './ImperialLength';
import { MetricLength } from './MetricLength';

/**
 * AdapterLength es una clase que adapta el sistema imperial a metrico.
 */
export class AdapterLength extends MetricLength {
  constructor(private imperialLength: ImperialLength) {
    super(Number((imperialLength.getFeet() / 3.281).toFixed(3)));
  }

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

