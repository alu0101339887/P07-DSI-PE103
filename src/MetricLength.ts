/**
 * MetricLength es una clase que trabaja con sistema métrico que trabaja con gramos, kilogramos y toneladas
 */
export class MetricLength {
  constructor(private unit: number) {}

  /**
   * Método que devuelve el valor en centimetros.
   * @returns {number} El valor en centimetros
   */
  public getCentimeters(): number {
      return this.unit * 100;
  }

  /**
   * Método que devuelve el valor en metros.
   * @returns {number} El valor en metros
   */
  public getMeters(): number {
      return this.unit;
  }

  /**
   * Método que devuelve el valor en kilómetros.
   * @returns {number} El valor en kilometros
   */
  public getKilometers(): number {
      return Number((this.unit / 1000).toFixed(2));
  }
}