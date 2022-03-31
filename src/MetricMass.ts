/**
 * MetricMass es una clase que trabaja con sistema métrico que trabaja con gramos, kilogramos y toneladas
 */
export class MetricMass {
  constructor(private unit: number) {}

  /**
   * Método que devuelve el valor en gramos.
   * @returns {number} El valor en gramos
   */
  public getGrams(): number {
    return this.unit
  }

  /**
   * Método que devuelve el valor en kilogramos.
   * @returns {number} El valor en kilogramos
   */
  public getKilograms(): number {
    return Number((this.unit / 1000).toFixed(3));
  }

  /**
   * Método que devuelve el valor en toneladas.
   * @returns {number} El valor en toneladas
   */
  public getTonnes(): number {
    return Number((this.unit / 1000000).toFixed(3));
  }
}