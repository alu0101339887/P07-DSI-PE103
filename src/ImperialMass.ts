/**
 * ImperialMass es una clase que trabaja con sistema métrico que trabaja con onzas, libras, piedras, centenas y toneladas.
 */
export class ImperialMass {
  constructor(private unit: number) {}

  /**
   * Método que devuelve el valor en onzas.
   * @returns {number} El valor en onzas
   */
  public getOunces(): number {
    return this.unit * 16;
  }

  /**
   * Método que devuelve el valor en libras.
   * @returns {number} El valor en libras
   */
  public getPounds(): number {
    return this.unit;
  }

  /**
   * Método que devuelve el valor en piedras.
   * @returns {number} El valor en piedras
   */
  public getStones(): number {  
    return Number((this.unit / 14).toFixed(3));
  }

  /**
   * Método que devuelve el valor en centenas.
   * @returns {number} El valor en centenas
   */
  public getHundredweights(): number {
    return Number((this.unit / 2000).toFixed(3));
  }

  /**
   * Método que devuelve el valor en toneladas.
   * @returns {number} El valor en toneladas
   */
  public getTons(): number {
    return Number((this.unit / 3240).toFixed(3));
  }
}

