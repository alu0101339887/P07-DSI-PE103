/**
 * ImperialLength es una clase que trabaja con sistema métrico que trabaja con pulgadas, pies, yardas y millas.
 */
export class ImperialLength {
  constructor(private unit: number) {}

  /**
   * Método que devuelve el valor en pulgadas.
   * @returns {number} El valor en pulgadas
   */
  public getInches(): number {
      return this.unit * 12;
  }

  /**
   * Método que devuelve el valor en pies.
   * @returns {number} El valor en pies
   */
  public getFeet(): number {
      return this.unit;
  }

  /**
   * Método que devuelve el valor en yardas.
   * @returns {number} El valor en yardas
   */
  public getYards(): number {
      return Number((this.unit / 3).toFixed(3));
  }

  /**
   * Método que devuelve el valor en millas.
   * @returns {number} El valor en millas
   */
  public getMiles(): number {
      return Number((this.unit / 5280).toFixed(3));
  }
}