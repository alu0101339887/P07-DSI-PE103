import { ImperialMass } from './ImperialMass';
import { MetricMass } from './MetricMass';

/**
 * AdapterMass es una clase que adapta el sistema imperial a metrico.
 */
export class AdapterMass extends MetricMass {
  constructor(private imperialMass: ImperialMass) {
    super(Number((imperialMass.getOunces() * 28.3495).toFixed(3)));
  } 

  /**
   * Método que convertirá onzas a gramos.
   * @returns {number} El valor en gramos
   */
  public getGrams(): number {
    return Number((this.imperialMass.getOunces() * 28.3495).toFixed(3));
  }

  /**
   * Método que convertirá libras a kilogramos.
   * @returns {number} Valor en kilogramos
   */
  public getKilograms(): number {
    return Number((this.imperialMass.getPounds() / 2.205).toFixed(3));
  }

  /**
   * Método que convertirá piedras a toneladas.
   * @returns {number} Valor en toneladas
   */
  public getTonnes(): number {
    return Number((this.imperialMass.getStones() / 157).toFixed(3));
  }
}