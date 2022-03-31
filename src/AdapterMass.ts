import { ImperialMass } from './ImperialMass';

/**
 * AdapterMass es una clase que adapta el sistema imperial a metrico.
 */
export class AdapterMass {
  constructor(private imperialMass: ImperialMass) {}

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
    return Number((this.imperialMass.getPounds() * 0.453592).toFixed(3));
  }

  /**
   * Método que convertirá piedras a toneladas.
   * @returns {number} Valor en toneladas
   */
  public getTonnes(): number {
    return Number((this.imperialMass.getStones() * 6.35029).toFixed(3));
  }
}